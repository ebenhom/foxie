import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import Link from "next/link"

import FavoriteButton from "@/components/FavoriteButton"
import CommentBox from "@/components/CommentBox"
import ViewCounter from "@/components/ViewCounter"



export default async function NovelPage
({

params

}:{

params:Promise<{id:string}>

})

{



const {id}=await params






const novel = await prisma.novel.findUnique({


where:{
id
},



include:{



chapters:{


orderBy:{


createdAt:"asc"


}


},





comments:{


include:{


user:true


},


orderBy:{


createdAt:"desc"


}


},




favorites:true



}


})







if(!novel){


notFound()


}








return (



<div className="p-10 max-w-5xl mx-auto">





<div className="mb-5">


<Link

href="/"

className="border px-4 py-2 rounded"

>

← Về trang chủ

</Link>


</div>








<ViewCounter

novelId={novel.id}

/>










<div className="flex gap-10">





<img


src={novel.cover}


className="w-60 h-80 object-cover rounded"


/>







<div className="flex-1">






<h1 className="text-4xl font-bold">


{novel.title}


</h1>







<p

className="
whitespace-pre-line
leading-7
"

>

{novel.description}

</p>







<p className="mt-5">


Thể loại:


<span className="font-bold ml-2">


{novel.tags}


</span>


</p>







<p className="mt-3">


Lượt xem:


{novel.views}


</p>







<div className="mt-5">


<FavoriteButton


novelId={novel.id}


/>


</div>







</div>






</div>









<section className="mt-10">



<h2 className="text-2xl font-bold mb-5">


Danh sách chương


</h2>







<div className="space-y-3">





{


novel.chapters.map((chapter)=>(



<Link


key={chapter.id}


href={`/chap/${chapter.id}`}


className="block border p-3 rounded hover:bg-gray-100"



>


{chapter.title}


</Link>




))


}






</div>





</section>









<section className="mt-10">



<CommentBox


novelId={novel.id}


/>



</section>









<section className="mt-10">



<h2 className="text-2xl font-bold mb-5">


Bình luận


</h2>








<div className="space-y-5">





{


novel.comments.map((comment)=>(



<div


key={comment.id}


className="border p-4 rounded"



>



<div className="font-bold">


{comment.user.name ?? "User"}


</div>







<p className="mt-2">


{comment.text}


</p>








<p className="text-sm text-gray-500">


{

new Date(comment.createdAt)
.toLocaleDateString()

}


</p>







</div>



))


}








{

novel.comments.length===0 &&


<p>

Chưa có bình luận

</p>



}






</div>







</section>






</div>


)


}