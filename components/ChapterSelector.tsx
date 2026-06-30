"use client"


import {useRouter} from "next/navigation"



export default function ChapterSelector(
{
chapters,
currentId
}:{
chapters:{
id:string
title:string
}[],
currentId:string
}

){


const router = useRouter()



return (


<select


className="border p-3 rounded"


value={currentId}


onChange={(e)=>{


router.push(
`/chap/${e.target.value}`
)


}}


>


{


chapters.map((chapter:any)=>(


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