import {NextResponse} from "next/server"
import {prisma} from "@/lib/prisma"
import fs from "fs/promises"
import path from "path"



export async function POST(req:Request){


const formData =
await req.formData()



const title =
formData.get("title") as string


const content =
formData.get("content") as string


const novelId =
formData.get("novelId") as string





const files =
formData.getAll("images") as File[]



const imageUrls:string[]=[]



const uploadDir =
path.join(
process.cwd(),
"public/uploads/chapters"
)



await fs.mkdir(
uploadDir,
{
recursive:true
}
)





for(const file of files){


if(file.size===0)
continue



const bytes =
await file.arrayBuffer()



const buffer =
Buffer.from(bytes)



const filename =
Date.now()+"-"+file.name



await fs.writeFile(

path.join(
uploadDir,
filename
),

buffer

)



imageUrls.push(
"/uploads/chapters/"+filename
)



}







const chapter =
await prisma.chapter.create({

data:{


title,


content,


novelId,


images:imageUrls


}


})





return NextResponse.json(chapter)



}
