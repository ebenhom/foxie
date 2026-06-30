import { prisma } from "@/lib/prisma"
import Link from "next/link"



export default async function Search(
{
searchParams
}:{
searchParams:Promise<{
q?:string
category?:string
}>
}

){



const params = await searchParams


const q = params.q ?? ""

const category = params.category ?? ""



const where:any = {}




if(q){

where.title = {

contains:q,

mode:"insensitive"

}

}




if(category){

where.category = {

contains:category,

mode:"insensitive"

}

}






const novels = await prisma.novel.findMany({


where,


orderBy:{

createdAt:"desc"

}


})








return (


<div className="p-10">



<h1 className="text-3xl font-bold mb-8">

Tìm kiếm truyện

</h1>






<form action="/search" className="mb-8">


<input


name="q"


defaultValue={q}


placeholder="Tên truyện"


className="border p-3 rounded"


/>





<button


className="border px-4 py-3 ml-2 rounded"


>

Tìm kiếm

</button>



</form>







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


className="w-full h-60 object-cover rounded"


/>





<h2 className="font-bold mt-3">

{novel.title}

</h2>





<p>

🏷 {novel.category}

</p>





</Link>



))


}





</div>








{

novels.length===0 && (

<p>

Không tìm thấy truyện

</p>

)


}





</div>


)


}