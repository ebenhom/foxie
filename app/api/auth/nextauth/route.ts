import NextAuth from "next-auth"

import GoogleProvider from "next-auth/providers/google"



const handler = NextAuth({


providers:[


GoogleProvider({


clientId:
process.env.GOOGLE_CLIENT_ID!,


clientSecret:
process.env.GOOGLE_CLIENT_SECRET!


})


],



callbacks:{



async jwt({token,user}){


if(user){


token.role =
user.email === "phanhnguyen342@gmail.com"
?
"ADMIN"
:
"USER"


}


return token


},




async session({session,token}){


if(session.user){


session.user.role =
token.role


}


return session


}



}



})


export {
handler as GET,
handler as POST
}