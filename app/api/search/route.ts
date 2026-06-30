import {NextResponse} from "next/server"
import {prisma} from "@/lib/prisma"



export async function GET(
req:Request
){


const {searchParams}
=
new URL(req.url)



const q =
searchParams.get("q")



if(!q){

return NextResponse.json([])

}



const novels =
await prisma.novel.findMany({

where:{


title:{


contains:q,


mode:"insensitive"


}


},



take:20


})



return NextResponse.json(novels)


}