import { prisma } from "@/lib/prisma"
import Link from "next/link"



export default async function Category(){



const novels = await prisma.novel.findMany({

orderBy:{
createdAt:"desc"
}

})



const categories = [

"Tình cảm",
"Tâm lý",
"Đô thị",
"Học đường"

]




return (

<div className="p-10">



<h1 className="text-3xl font-bold mb-8">

Thể loại truyện

</h1>





<div className="flex gap-3 flex-wrap mb-10">


{

categories.map((cat:any)=>(


<Link


key={cat}


href={`/search?category=${cat}`}


className="border px-4 py-2 rounded"


>


{cat}


</Link>


))


}



</div>








<h2 className="text-2xl font-bold mb-5">

Tất cả truyện

</h2>






<div className="grid grid-cols-4 gap-5">



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





<p>

🏷 {novel.tags}

</p>



</Link>



))


}




</div>







</div>


)


}