// singleton 
//objects literals

const mySym = Symbol("key1")//

const jsUser = {
    name: "aniket",
    "full name": "aniket gawande",
    [mySym] : "mykey1",//symbol ko hamesha ase hi karn hey 
    age : 18,
    location : "Nagpur",
    email: "aniket@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(jsUser.email)
//console.log(jsUser["email"])// its alternate option for the return the email just take as a string
//console.log(jsUser[mySym])
console.log(jsUser["full name"])












/*const tinderUser = new Object()// singleton object
const tinderUser = {}// non singleton object

tinderUser.id = "12345"
tinderUser.name = "aniket"
tinderUser.isLoggedIn = false
console.log(tinderUser);





const regularUser ={
    email:"aniket.com",
    fullname:{
        userfullname:  {
            firstname = "aniket",
            lastname = "gawande"
        }

    }
}
const course = {
   courseInstructor

}*/