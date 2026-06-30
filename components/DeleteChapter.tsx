"use client"

import {useRouter} from "next/navigation"



export default function DeleteChapter(
{
id
}:{
id:string
}

){


const router = useRouter()



async function remove(){


if(!confirm("Xoá chapter?")) return



await fetch(

`/api/admin/chapters/${id}`,

{

method:"DELETE"

}

)



router.refresh()


}





return (

<button

onClick={remove}

className="border px-3 py-2 rounded"

>

Xoá

</button>


)


}