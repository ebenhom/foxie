import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { prisma } from "@/lib/prisma"



export const {
handlers,
signIn,
signOut,
auth

}=NextAuth({


providers:[


Google({

clientId:process.env.GOOGLE_CLIENT_ID!,

clientSecret:process.env.GOOGLE_CLIENT_SECRET!


})


],



callbacks:{



async signIn({user}){


if(!user.email)
return false




const dbUser = await prisma.user.upsert({


where:{


email:user.email


},



update:{


name:user.name,

image:user.image


},



create:{


email:user.email,

name:user.name,

image:user.image,

role:
user.email==="phanhnguyen342@gmail.com"
?
"ADMIN"
:
"USER"


}



})



user.id=dbUser.id



return true


},






async jwt({token,user}){


if(user){


token.id=user.id


}


return token


},






async session({session,token}){



if(session.user){


session.user.id=token.id as string


}



return session



}



}



})