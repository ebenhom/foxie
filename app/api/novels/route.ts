import {NextResponse} from "next/server"
import {prisma} from "@/lib/prisma"
import cloudinary from "@/lib/cloudinary"



export async function POST(req:Request){


try{


const formData = await req.formData()


const title =
formData.get("title") as string


const tags =
formData.get("tags") as string


const description =
formData.get("description") as string


const file =
formData.get("cover") as File



const buffer =
Buffer.from(await file.arrayBuffer())



const upload =
await new Promise<any>((resolve,reject)=>{


cloudinary.uploader.upload_stream(

{
folder:"foxie-novel"
},

(error,result)=>{

if(error)
reject(error)

else
resolve(result)

}

).end(buffer)


})



const novel =
await prisma.novel.create({

data:{


title,

tags,

description,


cover:
upload.secure_url


}

})



return NextResponse.json(novel)


}
catch(error){


console.log(error)


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