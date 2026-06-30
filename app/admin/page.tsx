import {auth} from "@/lib/auth"
import {redirect} from "next/navigation"
import Link from "next/link"
import {prisma} from "@/lib/prisma"




export default async function AdminPage(){





const session =
await auth()





if(
!session?.user
){

redirect("/")

}






if(
session.user.email !== "phanhnguyen342@gmail.com"
){

redirect("/")

}







const novels =
await prisma.novel.count()



const users =
await prisma.user.count()



const comments =
await prisma.comment.count()







return (



<div className="p-10">






<h1 className="text-3xl font-bold">

Admin Dashboard

</h1>









<div className="grid grid-cols-3 gap-5 mt-10">






<div className="border p-5 rounded">


<h2 className="font-bold text-xl">

Truyện

</h2>



<p className="text-3xl mt-3">

{novels}

</p>


</div>







<div className="border p-5 rounded">


<h2 className="font-bold text-xl">

Người dùng

</h2>



<p className="text-3xl mt-3">

{users}

</p>


</div>







<div className="border p-5 rounded">


<h2 className="font-bold text-xl">

Bình luận

</h2>



<p className="text-3xl mt-3">

{comments}

</p>


</div>






</div>









<div className="mt-10 space-y-5">





<Link

href="/admin/novels"

className="block border p-5 rounded"

>

📚 Quản lý truyện

</Link>







<Link

href="/admin/comments"

className="block border p-5 rounded"

>

💬 Quản lý bình luận

</Link>







<Link

href="/admin/users"

className="block border p-5 rounded"

>

👤 Quản lý tài khoản

</Link>






</div>







</div>


)


}