import {NextResponse} from "next/server"
import {prisma} from "@/lib/prisma"



export async function POST(req:Request){


try{


const body = await req.json()



const chapter =
await prisma.chapter.create({

data:{


title:body.title,


content:body.content,


images:[],


novelId:body.novelId


}


})


return NextResponse.json(chapter)


}
catch(error){


console.log(error)


return NextResponse.json(
{
error:"Create chapter failed"
},
{
status:500
}
)


}

}