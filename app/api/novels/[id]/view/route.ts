import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"



export async function POST(
req:Request,
{
params
}:{
params:Promise<{id:string}>
}

){


const {id}=await params



const novel =
await prisma.novel.update({

where:{
id
},


data:{


views:{


increment:1


}


}


})



return NextResponse.json(novel)


}