//loop iteration

//for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 is the best number ");
        
    }else{
        console.log();
    }
    console.log(element);
    
}
//console.log(element); not execcute out of the loop 
console.log("welcome to the coding club");

for (let index = 1; index <= 19; index++) {
    console.log(`Outer loop value:${index}`);
    for (let i = 1; i <= 10; i++) {
        console.log(index +'*' + i +'=' + index*i );
        // this print the tables of  1 to 19  by the for loop
    }

    
}


let myArray = ["flash","batman","superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

for (let index = 1; index < 21; index++) {
    if (index == 5) {
        console.log`Detected 5`;
        continue
//break       
        
    }
    console.log(`Value of  i is deteted ${index}`);
    
}