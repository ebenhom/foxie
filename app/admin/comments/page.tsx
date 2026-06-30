import {prisma} from "@/lib/prisma"
import DeleteComment from "@/components/DeleteComment"



export default async function AdminComments(){



const comments =
await prisma.comment.findMany({

include:{
user:true,
novel:true
},


orderBy:{
createdAt:"desc"
}

})





return (

<div className="p-10">


<h1 className="text-3xl font-bold mb-8">

Quản lý bình luận

</h1>





<div className="space-y-5">


{

comments.map((c:any)=>(


<div

key={c.id}

className="border p-5 rounded"

>



<p className="font-bold">

{c.user.name ?? "User"}

</p>



<p>

Truyện:
{c.novel.title}

</p>




<p className="mt-3">

{c.text}

</p>




<DeleteComment

id={c.id}

/>



</div>


))


}



</div>



</div>


)


}