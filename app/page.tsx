import { prisma } from "@/lib/prisma"

import ContinueReading from "@/components/ContinueReading"

import { unstable_cache } from "next/cache"

import Link from "next/link"









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

w-full

overflow-x-hidden

bg-gray-50

"

>









<section

className="

w-full

max-w-6xl

mx-auto

px-4

sm:px-10

py-8

"

>



<ContinueReading />



</section>





















<section

className="

w-full

max-w-6xl

mx-auto

px-4

sm:px-10

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

gap-3

sm:gap-6

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

p-3

sm:p-4

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

h-44

sm:h-64

object-cover

rounded-lg

"



alt={novel.title}





/>

















<h2



className="

font-bold

text-sm

sm:text-lg

mt-4

"

>



{novel.title}



</h2>


















<p



className="

text-gray-500

mt-2

text-sm

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





))}













</div>
















</section>

























<section

className="

w-full

max-w-6xl

mx-auto

px-4

sm:px-10

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

grid-cols-2

sm:grid-cols-3

lg:grid-cols-4

gap-3

sm:gap-6

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

p-3

sm:p-4

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

h-44

sm:h-64

object-cover

rounded-lg

"







alt={novel.title}







/>

























<h2



className="

font-bold

text-sm

sm:text-lg

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