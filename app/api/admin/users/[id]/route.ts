import {NextResponse} from "next/server"
import {prisma} from "@/lib/prisma"



export async function PUT(

req:Request,

{
params
}:{
params:Promise<{id:string}>
}

){


const {id}=await params



const body = await req.json()



const user =
await prisma.user.update({

where:{
id
},

data:{
role:body.role
}

})


return NextResponse.json(user)


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



await prisma.user.delete({

where:{
id
}

})



return NextResponse.json({

success:true

})


}