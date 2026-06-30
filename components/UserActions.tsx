"use client"


export default function UserActions(
{
id,
role
}:{
id:string
role:string
}

){





async function changeRole(){


await fetch(

`/api/admin/users/${id}`,

{

method:"PUT",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

role:
role==="USER"
?
"ADMIN"
:
"USER"

})

}

)



location.reload()

}




async function remove(){


await fetch(

`/api/admin/users/${id}`,

{

method:"DELETE"

}

)


location.reload()

}





return (

<div className="flex gap-3 mt-3">


<button

onClick={changeRole}

className="border px-3 py-2 rounded"

>

Đổi quyền

</button>



<button

onClick={remove}

className="border px-3 py-2 rounded"

>

Xóa

</button>


</div>

)


}