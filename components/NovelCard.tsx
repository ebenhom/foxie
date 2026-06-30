import Link from "next/link"



export default function NovelCard
({
novel
}:{
novel:{
id:string
title:string
cover:string
description:string
}

})

{


return (



<Link


href={`/novels/${novel.id}`}


className="

block

border

rounded-xl

overflow-hidden

hover:shadow

transition

"


>



<img


src={novel.cover}


alt={novel.title}


className="

w-full

aspect-3/4

object-cover

"


/>







<div

className="
p-3
"

>


<h3

className="
font-bold
line-clamp-2

"

>

{novel.title}

</h3>





<p

className="
text-sm
text-gray-500
mt-2
line-clamp-3

"

>

{novel.description}

</p>





</div>



</Link>



)


}