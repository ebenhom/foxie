import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"



export async function GET(req:Request){


const {searchParams}=new URL(req.url)

const novelId =
searchParams.get("novelId")



if(!novelId){

return NextResponse.json([])

}




const comments =
await prisma.comment.findMany({

where:{
novelId
},


include:{


user:true


},


orderBy:{


createdAt:"desc"


}


})



return NextResponse.json(comments)


}






export async function POST(req:Request){



const session =
await auth()



if(!session?.user?.email){


return NextResponse.json(

{
error:"Unauthorized"
},

{
status:401
}

)


}




const body =
await req.json()



const {

novelId,

text

}=body





if(!text){


return NextResponse.json(

{
error:"Empty"
},

{
status:400
}

)


}




const user =
await prisma.user.findUnique({

where:{

email:session.user.email

}

})




if(!user){


return NextResponse.json(

{
error:"User not found"
},

{
status:404
}

)


}





const comment =
await prisma.comment.create({


data:{


text,


novelId,


userId:user.id


}



})





return NextResponse.json(comment)


}