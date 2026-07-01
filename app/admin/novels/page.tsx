import { prisma } from "@/lib/prisma"
import Link from "next/link"
import DeleteNovel from "@/components/DeleteNovel"

export const dynamic = "force-dynamic"

export default async function AdminNovels(){


const novels =
await prisma.novel.findMany({

include:{

_count:{

select:{
chapters:true
}

}

},

orderBy:{
createdAt:"desc"
}


})




return (


<div className="p-10">


<h1 className="text-3xl font-bold mb-8">

Quản lý truyện

</h1>



<Link

href="/admin/novels/create"

className="border px-5 py-3 rounded"

>

+ Thêm truyện

</Link>





<div className="mt-10 space-y-5">



{

novels.map((novel:any)=>(



<div

key={novel.id}

className="border p-5 rounded"


>



<div className="flex justify-between">



<div>



<h2 className="text-xl font-bold">

{novel.title}

</h2>



<p>

Số chapter:
{novel._count.chapters}

</p>



</div>





<div className="flex gap-3">



<Link

href={`/novels/${novel.id}`}

className="border px-3 py-2 rounded"

>

Xem

</Link>





<Link

href={`/admin/novels/${novel.id}/chapters`}

className="border px-3 py-2 rounded"

>

Quản lý chapter

</Link>





<Link

href={`/admin/novels/${novel.id}/edit`}

className="border px-3 py-2 rounded"

>

Sửa

</Link>





<DeleteNovel

id={novel.id}

/>



</div>




</div>




</div>



))


}



</div>



</div>


)


}