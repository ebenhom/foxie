"use client"


import {useRouter} from "next/navigation"



export default function DeleteNovel(
{
id
}:{
id:string
}

){


const router = useRouter()



async function remove(){



const ok =
confirm(
"Xoá truyện này?"
)



if(!ok)
return




await fetch(

`/api/admin/novels/${id}`,

{

method:"DELETE"

}

)




router.refresh()



}



return (


<button

onClick={remove}

className="border px-3 py-2 rounded text-red-600"

>


Xoá


</button>


)


}