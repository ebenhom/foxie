const ADMINS = [
    "phanhnguyen342@gmail.com"
]


export function isAdmin(email:string){

    return ADMINS.includes(email)

}