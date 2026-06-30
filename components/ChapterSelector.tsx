"use client"


import {useRouter} from "next/navigation"



export default function ChapterSelector
({
chapters,
currentId
}:{
chapters:{
id:string
title:string
}[],
currentId:string
})

{


const router = useRouter()



return (


<select


className="
w-full
sm:w-auto
border
px-3
py-2
rounded-xl
text-sm
sm:text-base
"

value={currentId}


onChange={(e)=>{


router.push(

`/chap/${e.target.value}`

)


}}


>



{

chapters.map((chapter)=>(


<option

key={chapter.id}

value={chapter.id}

>


{chapter.title}


</option>


))


}



</select>


)


}