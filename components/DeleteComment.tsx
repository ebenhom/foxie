"use client"


export default function DeleteComment(
{
id
}:{
id:string
}

){



async function remove(){


await fetch(

`/api/admin/comments/${id}`,

{
method:"DELETE"
}

)


location.reload()


}




return (


<button

onClick={remove}

className="border px-3 py-2 rounded mt-3"

>

Xóa

</button>


)


}