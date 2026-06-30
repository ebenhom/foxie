import { prisma } from "@/lib/prisma"

import Link from "next/link"



export default async function CategoryDetail({

params

}:{

params:Promise<{name:string}>

}){


const {name}=await params




const novels = await prisma.novel.findMany({

where:{


category:{


contains:name

}


},


orderBy:{


createdAt:"desc"

}


})




return (


<div className="p-10">


<h1 className="text-3xl font-bold mb-8">

{name}

</h1>



<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">



{

novels.map((novel:any)=>(


<Link

key={novel.id}

href={`/novels/${novel.id}`}

className="border p-3 rounded"

>


<img

src={novel.cover}

className="w-full h-60 object-cover rounded"

/>



<h2 className="font-bold mt-3">

{novel.title}

</h2>



</Link>


))


}



</div>


</div>


)

}