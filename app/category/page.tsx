import { prisma } from "@/lib/prisma"
import Link from "next/link"


export default async function Category(){


const novels = await prisma.novel.findMany({

orderBy:{
createdAt:"desc"
}

})


const categories = [

"Tình cảm",
"Tâm lý",
"Đô thị",
"Học đường"

]


return (

<div

className="
min-h-screen
w-full
overflow-x-hidden
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

Thể loại truyện

</h1>




<div

className="
flex
flex-wrap
gap-3
mb-10
"

>


{

categories.map((cat)=>(


<Link

key={cat}

href={`/search?category=${cat}`}

className="
border
bg-white
px-4
py-2
rounded-xl
hover:bg-gray-100
"

>

{cat}

</Link>


))

}


</div>





<h2

className="
text-2xl
font-bold
mb-6
"

>

Tất cả truyện

</h2>





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





<h3

className="
font-bold
mt-3
text-sm
sm:text-base
"

>

{novel.title}

</h3>




<p

className="
text-sm
text-gray-500
mt-2
"

>

🏷 {novel.tags}

</p>



</Link>


))


}



</div>





</div>


)

}