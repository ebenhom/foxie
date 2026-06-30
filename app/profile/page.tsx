import { prisma } from "@/lib/prisma"
import Link from "next/link"



export default async function Profile(){



const histories =
await prisma.history.findMany({


include:{


novel:true,


chapter:true


},


orderBy:{


updatedAt:"desc"


},


take:20



})







return (



<div className="max-w-5xl mx-auto p-10">





<h1 className="text-3xl font-bold mb-8">

Lịch sử đọc

</h1>







{

histories.length===0 && (


<p>

Bạn chưa đọc truyện nào

</p>


)

}





<div className="grid grid-cols-3 gap-6">





{

histories.map((item)=>(



<Link


key={item.id}


href={`/chap/${item.chapter.id}`}


className="border rounded-lg p-4 hover:shadow-lg transition"


>





<img


src={item.novel.cover}


className="w-full h-60 object-cover rounded"


/>






<h2 className="font-bold text-xl mt-3">


{item.novel.title}


</h2>






<p className="mt-2 text-gray-600">


{item.chapter.title}


</p>





<p className="text-sm text-gray-500 mt-3">


Đọc gần đây:


{
new Date(item.updatedAt)
.toLocaleDateString()
}


</p>






<div className="mt-3 border rounded">


<div


className="h-2 bg-black rounded"


style={{


width:`${item.progress}%`


}}


/>



</div>





</Link>



))


}





</div>






</div>



)



}