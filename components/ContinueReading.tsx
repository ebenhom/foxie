import { auth } from "@/lib/auth"

import { prisma } from "@/lib/prisma"

import Link from "next/link"





export default async function ContinueReading(){





const session = await auth()





if(!session?.user?.email){

return null

}







const user = await prisma.user.findUnique({

where:{

email:session.user.email

}

})





if(!user){

return null

}








const histories =

await prisma.history.findMany({





where:{


userId:user.id


},





include:{


novel:true,


chapter:true


},





orderBy:{


updatedAt:"desc"


},





take:4





})






// chưa đọc truyện nào thì ẩn luôn

if(histories.length === 0){

return null

}









return (



<div>



<h1

className="

text-3xl

font-bold

mb-6

"

>

📖 Tiếp tục đọc

</h1>








<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">







{

histories.map(item=>(





<Link





key={item.id}





href={`/chap/${item.chapter.id}`}





className="

bg-white

border

rounded-xl

p-3

hover:shadow-lg

transition

"





>








<img





src={item.novel.cover}





className="

h-48

w-full

object-cover

rounded

"





/>










<h2 className="font-bold mt-3">



{item.novel.title}



</h2>








<p className="text-sm text-gray-500">



{item.chapter.title}



</p>








</Link>





))





}







</div>







</div>



)





}