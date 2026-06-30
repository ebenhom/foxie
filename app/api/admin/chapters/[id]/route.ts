import {NextResponse} from "next/server"
import {prisma} from "@/lib/prisma"



export async function GET(
req:Request,
{
params
}:{
params:Promise<{id:string}>
}

){

const {id}=await params


const chapter =
await prisma.chapter.findUnique({

where:{
id
}

})


if(!chapter){

return NextResponse.json(
{
error:"Không tìm thấy chapter"
},
{
status:404
}
)

}



return NextResponse.json(chapter)

}






export async function PUT(
req:Request,
{
params
}:{
params:Promise<{id:string}>
}

){


const {id}=await params


const body =
await req.json()



const chapter =
await prisma.chapter.update({

where:{
id
},

data:{

title:body.title,

content:body.content

}


})



return NextResponse.json(chapter)

}








export async function DELETE(
req:Request,
{
params
}:{
params:Promise<{id:string}>
}

){


const {id}=await params



await prisma.chapter.delete({

where:{
id
}

})



return NextResponse.json({

success:true

})


}