import { prisma } from "@/lib/prisma"

import Link from "next/link"

import ContinueReading from "@/components/ContinueReading"

import { unstable_cache } from "next/cache"







export default async function Home(){





const getNovels = unstable_cache(

async()=>{


return await prisma.novel.findMany({


orderBy:{


createdAt:"desc"


},


take:8


})


},


["home-novels"],


{

revalidate:60

}


)






const novels = await getNovels()











const getHotNovels = unstable_cache(

async()=>{


return await prisma.novel.findMany({


orderBy:{


views:"desc"


},


take:8


})


},


["hot-novels"],


{

revalidate:60

}


)







const hotNovels = await getHotNovels()











return (



<div

className="

min-h-screen

bg-gray-50

"

>












<nav

className="

max-w-6xl

mx-auto

px-10

py-6

flex

items-center

justify-between

gap-6

"

>








<div className="flex gap-8 items-center">








<Link

href="/hot"

className="

hover:text-blue-600

transition

font-medium

"

>

🔥 Hot

</Link>









<Link

href="/category"

className="

hover:text-blue-600

transition

font-medium

"

>

📚 Thể loại

</Link>







</div>









<form action="/search">


<input


name="q"


placeholder="🔍 Tìm kiếm truyện..."


className="

border

rounded-xl

px-5

py-3

w-72

focus:outline-none

focus:ring-2

focus:ring-blue-400

"

/>



</form>







</nav>












<section

className="

max-w-6xl

mx-auto

px-10

py-8

"

>



<ContinueReading />



</section>













<section

className="

max-w-6xl

mx-auto

px-10

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

grid-cols-4

gap-6

"

>







{

hotNovels.map((novel:any)=>(





<Link


prefetch={true}


key={novel.id}


href={`/novels/${novel.id}`}


className="

bg-white

border

rounded-xl

p-4

shadow-sm

hover:shadow-lg

hover:-translate-y-1

transition

"


>








<img


src={novel.cover}


className="

w-full

h-64

object-cover

rounded-lg

"


/>







<h2

className="

font-bold

text-lg

mt-4

"


>


{novel.title}


</h2>








<p

className="

text-gray-500

mt-2

"

>

👁 {novel.views}


</p>








<p

className="

text-sm

mt-2

"

>

🏷 {novel.category}


</p>







</Link>





))


}







</div>







</section>













<section

className="

max-w-6xl

mx-auto

px-10

py-8

pb-20

"

>







<h1

className="

text-3xl

font-bold

mb-8

"

>

📚 Truyện mới update

</h1>












<div

className="

grid

grid-cols-4

gap-6

"

>









{

novels.map((novel:any)=>(







<Link


prefetch={true}


key={novel.id}



href={`/novels/${novel.id}`}



className="

bg-white

border

rounded-xl

p-4

shadow-sm

hover:shadow-lg

hover:-translate-y-1

transition

"



>









<img



src={novel.cover}



className="

w-full

h-64

object-cover

rounded-lg

"



/>









<h2

className="

font-bold

text-lg

mt-4

"

>


{novel.title}


</h2>









<p

className="

text-sm

mt-3

"

>

🏷 {novel.category}


</p>









<p

className="

text-sm

text-gray-500

mt-1

"

>

{novel.tags}


</p>









</Link>







))



}










</div>









</section>












</div>



)


}