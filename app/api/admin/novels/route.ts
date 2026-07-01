import {NextResponse} from "next/server"

import {prisma} from "@/lib/prisma"

import cloudinary from "@/lib/cloudinary"

import { revalidatePath } from "next/cache"




export async function POST(
req:Request
){


try{



const formData =
await req.formData()





const title =
String(formData.get("title") || "")



const description =
String(formData.get("description") || "")



const tags =
String(formData.get("tags") || "")



const category =
String(formData.get("category") || "Khác")





const file =
formData.get("cover") as File | null





let cover = ""






if(file && file.size > 0){



const bytes =
await file.arrayBuffer()



const buffer =
Buffer.from(bytes)






const upload =
await new Promise<any>(

(resolve,reject)=>{


cloudinary.uploader.upload_stream(


{
folder:"foxie"
},


(error,result)=>{


if(error){

reject(error)

}


else{


resolve(result)

}


}



).end(buffer)



}




)






cover =
upload.secure_url



}







const novel =

await prisma.novel.create({


data:{


title,


description,


tags,


category,


cover



}



})


revalidatePath("/")
revalidatePath("/admin/novels")
revalidatePath("/hot")
revalidatePath("/category")



return NextResponse.json(
novel,
{
status:200
}
)





}

catch(error){


console.log(
"CREATE NOVEL ERROR:",
error
)



return NextResponse.json(

{
error:"Create novel failed"
},

{
status:500
}

)



}


}