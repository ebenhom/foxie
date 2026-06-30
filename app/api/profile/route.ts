import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"



export async function GET(){


const session = await auth()



if(!session?.user?.id){

return NextResponse.json(
{
error:"Unauthorized"
},
{
status:401
}

)

}




const userId =
session.user.id



const user =
await prisma.user.findUnique({

where:{
id:userId
},


include:{


favorites:{

include:{

novel:true

}

},


comments:{

include:{

novel:true

},

orderBy:{
createdAt:"desc"
}

}


}


})




return NextResponse.json(user)


}