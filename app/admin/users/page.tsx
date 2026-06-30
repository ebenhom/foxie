import {prisma} from "@/lib/prisma"
import UserActions from "@/components/UserActions"



export default async function Users(){



const users =
await prisma.user.findMany({

orderBy:{
createdAt:"desc"
}

})





return (

<div className="p-10">


<h1 className="text-3xl font-bold mb-8">

Quản lý tài khoản

</h1>




<div className="space-y-5">


{


users.map(user=>(


<div

key={user.id}

className="border p-5 rounded"

>


<h2 className="font-bold">

{user.name}

</h2>


<p>

{user.email}

</p>


<p>

Role:
{user.role}

</p>




<UserActions

id={user.id}

role={user.role}

/>



</div>


))


}



</div>


</div>


)


}