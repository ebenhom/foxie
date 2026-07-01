import {prisma} from "@/lib/prisma"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default async function HotPage(){


const novels =
await prisma.novel.findMany({

orderBy:{

views:"desc"

},

take:20

})


return (

<div

className="
min-h-screen
bg-gray-50
px-4
sm:px-8
py-8
"

>


<h1

className="
text-3xl
font-bold
mb-8
"

>

🔥 Truyện Hot

</h1>




<div

className="
grid
grid-cols-2
sm:grid-cols-3
lg:grid-cols-4
gap-4
"

>


{


novels.map((novel:any)=>(


<Link

key={novel.id}

href={`/novels/${novel.id}`}

className="
bg-white
border
rounded-xl
p-3
shadow-sm
"

>


<img

src={novel.cover}

className="

w-full

h-44

sm:h-60

object-cover

rounded-lg

"

/>



<h2

className="
font-bold
mt-3
text-sm
sm:text-base
"

>

{novel.title}

</h2>



<p

className="
text-sm
text-gray-500
mt-2
"

>

👁 {novel.views}

</p>



</Link>


))

}



</div>


</div>

)

}