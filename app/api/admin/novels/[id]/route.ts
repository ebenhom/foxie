import {NextResponse} from "next/server"

import {prisma} from "@/lib/prisma"





export async function DELETE(

req:Request,

{
params
}:{
params:Promise<{
id:string
}>
}

){



try{



const {id} = await params






await prisma.novel.delete({


where:{


id


}


})






return NextResponse.json(

{
success:true
},

{
status:200
}

)






}

catch(error){



console.log(
"DELETE NOVEL ERROR:",
error
)





return NextResponse.json(

{
error:"Delete failed"
},

{
status:500
}

)



}



}