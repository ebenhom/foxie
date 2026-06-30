"use client"

import {useRouter} from "next/navigation"
import {useState} from "react"



export default function SearchBox(){


const router = useRouter()


const [q,setQ]=useState("")



function search(){


router.push(
`/?search=${q}`
)


}



return (

<div className="flex gap-2">


<input

className="border p-2"

placeholder="Tìm truyện"

value={q}

onChange={
e=>setQ(e.target.value)
}

/>


<button

onClick={search}

className="border px-4"

>

Tìm

</button>


</div>

)

}