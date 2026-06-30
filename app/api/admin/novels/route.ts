import {NextResponse} from "next/server"
import {prisma} from "@/lib/prisma"

import fs from "fs/promises"
import path from "path"





export async function POST(
req:Request
){



const formData =
await req.formData()





const title =
formData.get("title") as string



const description =
formData.get("description") as string



const tags =
formData.get("tags") as string



const category =
formData.get("category") as string || "Khác"





const file =
formData.get("cover") as File | null






let cover = ""







if(file){



const bytes =
await file.arrayBuffer()



const buffer =
Buffer.from(bytes)





const uploadDir =
path.join(

process.cwd(),

"public/uploads"

)





await fs.mkdir(

uploadDir,

{

recursive:true

}

)







const filename =

Date.now()

+

"-"

+

file.name






await fs.writeFile(

path.join(

uploadDir,

filename

),

buffer

)





cover =
"/uploads/" + filename



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








return NextResponse.json(novel)



}