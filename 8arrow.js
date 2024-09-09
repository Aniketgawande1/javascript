const user = {
    username: "aniket",
    price: 88,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website`);
         console.log(this); // Uncomment this line if you want to see the `user` object
    }
}

user.welcomeMessage();
user.username = "sam"
user.welcomeMessage();
console.log(this);// (this) only work on the objects and not work in the function;


//--------------------arrow function--------------------
const chai = function () {
    let username = "aniket"
    console.log(this.username);
    //this is the normall fun
}


const chai2 = () =>{
    let username = "aniket"
    console.log(this.username);
    //this is the simple arrow function

}

// syntax is () => {}
    //and also can hold with the varables such as
    const addTwo = () => {
        
}