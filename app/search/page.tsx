import { prisma } from "@/lib/prisma"
import Link from "next/link"


export default async function Search({

searchParams

}:{

searchParams:Promise<{

q?:string

category?:string

}>

}){


const params = await searchParams


const q=params.q ?? ""

const category=params.category ?? ""



const where:any={}



if(q){

where.title={

contains:q,

mode:"insensitive"

}

}



if(category){

where.category={

contains:category,

mode:"insensitive"

}

}



const novels = await prisma.novel.findMany({

where,

orderBy:{

createdAt:"desc"

}

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



<h1 className="text-3xl font-bold mb-8">

Tìm kiếm truyện

</h1>




<form

action="/search"

className="flex gap-3 mb-8 flex-wrap"

>


<input

name="q"

defaultValue={q}

placeholder="Tên truyện"

className="border p-3 rounded-xl w-full sm:w-80"

/>


<button

className="

border

px-5

rounded-xl

bg-white

"

>

Tìm kiếm

</button>


</form>





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

"

>

{novel.title}

</h2>



<p>

🏷 {novel.category}

</p>


</Link>


))

}


</div>



{

novels.length===0 && (

<p>

Không tìm thấy truyện

</p>

)

}


</div>


)


}