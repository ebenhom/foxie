import {prisma} from "@/lib/prisma"
import Link from "next/link"



export default async function HotPage(){



const novels =
await prisma.novel.findMany({


orderBy:{


views:"desc"


},


take:20


})




return (

<div className="p-10">


<h1 className="text-3xl font-bold mb-5">

Truyện Hot

</h1>



<div className="grid grid-cols-4 gap-5">



{

novels.map((novel)=>(


<Link

key={novel.id}

href={`/novels/${novel.id}`}

className="border p-3 rounded"

>


<img

src={novel.cover}

className="h-60 w-full object-cover"

/>



<h2 className="font-bold">

{novel.title}

</h2>



<p>

Lượt xem:

{novel.views}

</p>



</Link>


))


}



</div>



</div>

)

}