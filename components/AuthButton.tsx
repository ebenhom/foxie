"use client"


import {
useSession,
signIn,
signOut
} from "next-auth/react"


import Link from "next/link"



export default function AuthButton(){


const {
data:session
}=useSession()



if(session){


return (

<div className="
flex
gap-3
items-center
">


<Link

href="/profile"

className="
border
px-3
py-2
rounded
"

>

Profile

</Link>



<span>

{session.user?.name}

</span>



<button

onClick={()=>signOut()}

className="
bg-red-500
text-white
px-3
py-2
rounded
"

>

Đăng xuất

</button>



</div>

)

}




return (

<button

onClick={()=>signIn("google")}

className="
bg-black
text-white
px-3
py-2
rounded
"

>

Đăng nhập Google

</button>

)


}