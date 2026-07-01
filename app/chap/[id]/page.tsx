import { prisma } from "@/lib/prisma"

import { notFound } from "next/navigation"

import Link from "next/link"

import ReaderProgress from "@/components/ReaderProgress"

import ChapterSelector from "@/components/ChapterSelector"

import ReaderSetting from "@/components/ReaderSetting"

import ReaderContent from "@/components/ReaderContent"








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

<>


<div

id="reader-area"

className="

min-h-screen

w-full

overflow-x-hidden

"

>


<div

className="

max-w-4xl

mx-auto

px-4

sm:px-6

py-8

"

>







{/* tên truyện */}



<Link


href={`/novels/${chap.novel.id}`}


className="

text-2xl

sm:text-3xl

font-bold

hover:text-blue-600

transition

"

>


{chap.novel.title}


</Link>








<h2

className="

text-lg

sm:text-xl

mt-5

mb-8

font-semibold

"

>


{chap.title}


</h2>









{/* chuyển chương đầu */}



<div

className="

w-full

flex

items-center

justify-between

gap-3

mb-8

flex-wrap

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


<div className="w-24"/>


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

<div className="w-24"/>

)

}





</div>









<ReaderProgress


novelId={chap.novel.id}


chapterId={chap.id}


/>









<div

className="

my-6

"

>

<ReaderSetting />

</div>









<ReaderContent

content={chap.content}

/>


<ReaderSetting />





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













{/* chuyển chương cuối */}



<div

className="

w-full

flex

items-center

justify-between

gap-3

mt-10

flex-wrap

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

<div className="w-24"/>

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

<div className="w-24"/>

)

}






</div>








</div>



</div>


</>



)


}