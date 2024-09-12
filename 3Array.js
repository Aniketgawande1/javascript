// Array

/*const myArray =[1,2,3,4,5]
const myHeros = [ "sahktiman","doga"]
console.log(myArray[0]);
// Array make shallow copies
// matlab refernce may bhi change hoga 
//they have same reference

//array method
myArray.push(6)// add
myArray.pop(1)//delete last element
myArray.shift()
const newArr = myArr.join()// they converts the type to string 
console.log(newArr);
console.log(myArray);


//slice, splice


const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B",myArray); 

const myn2 = myArr.splice(1,3)
console.log(myn2);*/



//

const marvel_heros = ["thor","spiderman","Ironman"]
const dc_heros = ["superman", "flash","Batman"]

console.log(marvel_heros);
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)

const all_new_heros =[...marvel_heros,dc_heros]
console.log(all_new_heros);

const another_array = [1,2,[3,4],5,[6,7,8]]
const real_another_array = another_array.flat(Infinity)// in the parentheis give the depth of the vale such as 3 4 5 
console.log(real_another_array);
console.log(Array.isArray("aniket"))
console.log(Array.from("aniket"))//(form) converts into the array type 
console.log(Array.from({name :"aniket"}))// note it form cannot change the type of the object{}

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))// A set of elements to include in the new array object .




