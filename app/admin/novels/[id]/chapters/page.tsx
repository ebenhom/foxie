import { prisma } from "@/lib/prisma"
import Link from "next/link"
import DeleteChapter from "@/components/DeleteChapter"



export default async function ManageChapters(
{
params
}:{
params:Promise<{id:string}>
}

){



const {id}=await params





const novel =
await prisma.novel.findUnique({

where:{
id
},


include:{


chapters:{


orderBy:{


createdAt:"asc"


}


}


}


})





if(!novel){


return (


<h1 className="p-10 text-2xl">

Không có truyện

</h1>


)


}





return (


<div className="p-10">



<h1 className="text-3xl font-bold mb-8">

Quản lý chapter:

{novel.title}

</h1>





<Link

href={`/admin/novels/${id}/chapters/create`}

className="border px-5 py-3 rounded"

>

+ Thêm chapter

</Link>






<div className="mt-10 space-y-4">



{


novel.chapters.map((chap:any)=>(



<div


key={chap.id}


className="border p-4 rounded flex justify-between items-center"


>



<div>


<h2 className="font-bold">

{chap.title}

</h2>


</div>






<div className="flex gap-3">



<Link


href={`/chap/${chap.id}`}


className="border px-3 py-2 rounded"


>

Xem

</Link>





<Link


href={`/admin/chapters/${chap.id}/edit`}


className="border px-3 py-2 rounded"


>

Sửa

</Link>






<DeleteChapter


id={chap.id}


/>





</div>






</div>



))


}



</div>





</div>


)


}