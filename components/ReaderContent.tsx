"use client"


export default function ReaderContent({

content

}:{

content:string

}){





return (



<div


className="

leading-relaxed

px-3

sm:px-6

md:px-10

"

style={{

fontSize:"var(--reader-size,18px)"

}}



>


{


content

.split("\n")

.map((line,index)=>(



<p


key={index}


className="my-3"


>


{line}


</p>



))



}



</div>



)



}