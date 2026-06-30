import { prisma } from "@/lib/prisma"

import { notFound } from "next/navigation"

import Link from "next/link"

import ReaderProgress from "@/components/ReaderProgress"

import ChapterSelector from "@/components/ChapterSelector"

import ReaderSetting from "@/components/ReaderSetting"





export default async function ChapPage
({

params

}:{

params:Promise<{id:string}>

})

{



const {id}=await params







const chap =

await prisma.chapter.findUnique({

where:{
id
},


include:{


novel:{


include:{


chapters:{


orderBy:{


createdAt:"asc"


}


}


}


}


}


})







if(!chap){

notFound()

}







const chapters =
chap.novel.chapters






const index =
chapters.findIndex(

(item:any)=>item.id===chap.id

)







const prev =
chapters[index-1]



const next =
chapters[index+1]








return (



<div

className="
max-w-4xl
mx-auto
px-4
sm:px-6
py-8
"

>







<div className="mb-8">


<Link

href="/"

className="
border
px-4
py-2
rounded-xl
hover:bg-gray-100
transition
"

>

← Trang chủ

</Link>


</div>









{/* tên truyện */}



<Link


href={`/novels/${chap.novel.id}`}


className="
text-3xl
font-bold
hover:text-blue-600
transition
"

>


{chap.novel.title}


</Link>








<h2

className="
text-xl
mt-5
mb-8
font-semibold
"

>


{chap.title}


</h2>









{/* thanh chuyển chương đầu */}



<div

className="
flex
items-center
justify-between
gap-3
mb-8
"

>




{

prev ? (


<Link

href={`/chap/${prev.id}`}

className="
border
px-4
py-2
rounded-xl
hover:bg-gray-100
transition
whitespace-nowrap
"

>

← Trang trước

</Link>


)

:

(

<div className="w-30" />

)

}







<ChapterSelector


chapters={chapters}


currentId={chap.id}


/>








{

next ? (


<Link

href={`/chap/${next.id}`}

className="
border
px-4
py-2
rounded-xl
hover:bg-gray-100
transition
whitespace-nowrap
"

>

Trang sau →

</Link>


)

:

(

<div className="w-30" />

)

}




</div>












<ReaderProgress


novelId={chap.novel.id}


chapterId={chap.id}


/>











{/* setting đọc truyện */}



<div

className="
my-6
"

>


<ReaderSetting />


</div>












{/* nội dung chap */}



<div

className="
text-lg
leading-normal
px-3
sm:px-6
md:px-10
"

>


{


chap.content

.split("\n")

.map((line:any,index:number)=>(


<p

key={index}

className="
my-3
"

>


{line}


</p>



))


}



</div>









{/* ảnh chapter */}



{


chap.images.length >0 && (


<div

className="
mt-10
space-y-8
"

>


{


chap.images.map((img:string,index:number)=>(


<img


key={index}


src={img}


className="
w-full
rounded-xl
"

alt="chapter image"


/>


))


}



</div>


)


}













{/* thanh chuyển chương cuối */}





<div

className="
flex
items-center
justify-between
gap-3
mt-10
"

>






{

prev ? (


<Link

href={`/chap/${prev.id}`}

className="
border
px-4
py-2
rounded-xl
hover:bg-gray-100
transition
whitespace-nowrap
"

>

← Trang trước

</Link>


)

:

(

<div className="w-30" />

)

}









<ChapterSelector


chapters={chapters}


currentId={chap.id}


/>










{

next ? (


<Link

href={`/chap/${next.id}`}

className="
border
px-4
py-2
rounded-xl
hover:bg-gray-100
transition
whitespace-nowrap
"

>

Trang sau →

</Link>


)

:

(

<div className="w-30" />

)

}




</div>









</div>



)


}