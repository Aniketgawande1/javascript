const arr = [1,2,3,4,5,6]
for (const num  of arr) {//obect matalab kis chej ke upar loop lagna hey
    console.log(num);
}
// in for of loop they represents the value
const greetings = "hello world"
for (const great  of greetings) {
    console.log(`each char is ${great}`);
    
}
//maps
// maps only print the uniqe values and cannot repeat the already given values
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of Amercia")
map.set('FR',"France")
map.set('IN',"India")
console.log(map);
// map ke uander iteration nahi hota hey for in loop


for (const key of map) {
    console.log(key);
    //they will give the complet array
}

for (const [arr1,value] of map) {
    console.log(arr1, ':-',value);
    
}

//for objects
/*const myObject = {
    'game1':"NFS",
    'game2':"spiderman"
}
for (const sha of myObject) {
    //console.log(sha);
    // object is not itterable in the maps they give error
}*/
//------------------ for in loop------------------


//in forin loop they represents they keys

const myObject1 ={
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}
for (const key in myObject1) {
    console.log(`${key}shortcut is for ${myObject1[key]}`);
    
}

const programming =["js","cpp","py","java","rb"]
for (const key in programming) {
    console.log(/* for  have the values write code in this pattern and have the key then wrte only key*/programming[key]);
    
}
// higher oder loop  
//for each loop
const code = ["Aniket","gaw","gawande","pyhton"]
code.forEach(function(val1){
    console.log(val1);
})
 code.forEach((item,index,arr)=>{
    console.log(item,index,arr);
 })