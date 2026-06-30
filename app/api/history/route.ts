import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"



export async function POST(req: Request) {


    const session = await auth()


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



    const body = await req.json()


    const {
        novelId,
        chapterId,
        progress
    } = body



    const user = await prisma.user.findUnique({

        where:{
            email: session.user.email
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



    const history = await prisma.history.upsert({

        where:{

            userId_chapterId:{
                userId:user.id,
                chapterId
            }

        },


        update:{

            progress

        },


        create:{

            userId:user.id,
            novelId,
            chapterId,
            progress

        }

    })



    return NextResponse.json(history)

}





export async function GET(){


    const session = await auth()



    if(!session?.user?.email){

        return NextResponse.json([])

    }



    const histories = await prisma.history.findMany({

        where:{

            user:{
                email:session.user.email
            }

        },


        include:{

            novel:true,
            chapter:true

        },


        orderBy:{

            updatedAt:"desc"

        }


    })



    return NextResponse.json(histories)


}