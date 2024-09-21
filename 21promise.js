const promiseOne =new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()

    },1000)

});
promiseOne.then(function(){
    console.log("Promise Consumed");
})// .then is direct connection with the resolve


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Aniket " ,email:"aniketgaw470"})

    },1000)
})
promiseThree.then(function(user){
    console.log(user);

})

const  promiseFour =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({usernsme:"aniket"})
        }else {
            reject('ERROR:Something went wrong ')
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("the promise is either resolve or rejected"));

