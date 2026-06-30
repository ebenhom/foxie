import {prisma} from "@/lib/prisma"

import Link from "next/link"



export default async function NovelList(){


const novels =
await prisma.novel.findMany({

take:8,

orderBy:{
createdAt:"desc"
}

})



return (

<div className="grid grid-cols-4 gap-6">


{

novels.map(novel=>(


<Link

key={novel.id}

href={`/novels/${novel.id}`}

>

{novel.title}


</Link>


))


}


</div>

)

}