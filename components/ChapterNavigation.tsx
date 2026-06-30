"use client"


import Link from "next/link"



export default function ChapterNavigation(
{
prev,
next
}:{
prev:any,
next:any
}

){



return (

<div className="flex justify-between my-10">


{

prev ?

<Link

href={`/chap/${prev.id}`}

className="border px-5 py-2 rounded"

>

⬅ {prev.title}

</Link>


:

<div/>

}





{

next &&


<Link

href={`/chap/${next.id}`}

className="border px-5 py-2 rounded"

>

{next.title} ➡

</Link>


}



</div>

)

}