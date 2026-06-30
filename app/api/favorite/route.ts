import {NextResponse} from "next/server"
import {auth} from "@/lib/auth"
import {prisma} from "@/lib/prisma"



export async function GET(
req:Request
){


const session = await auth()



if(!session?.user?.email){

return NextResponse.json({

liked:false

})

}




const {searchParams}=new URL(req.url)



const novelId =
searchParams.get("novelId")




const user =
await prisma.user.findUnique({

where:{

email:session.user.email

}

})




if(!user){

return NextResponse.json({

liked:false

})

}





const favorite =
await prisma.favorite.findUnique({

where:{


userId_novelId:{


userId:user.id,

novelId:novelId!


}


}


})





return NextResponse.json({

liked:!!favorite

})

}





export async function POST(
req:Request
){


const session = await auth()



if(!session?.user?.email){

return NextResponse.json({

error:"Unauthorized"

},
{
status:401
})

}




const {
novelId
}=await req.json()





const user =
await prisma.user.findUnique({

where:{

email:session.user.email

}

})




if(!user){

return NextResponse.json({

error:"User not found"

})

}





const exists =
await prisma.favorite.findUnique({

where:{


userId_novelId:{


userId:user.id,


novelId


}


}


})





if(exists){



await prisma.favorite.delete({

where:{

id:exists.id

}

})



return NextResponse.json({

liked:false

})


}




await prisma.favorite.create({

data:{


userId:user.id,


novelId


}

})




return NextResponse.json({

liked:true

})



}