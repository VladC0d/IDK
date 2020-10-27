/* While loops
var num= 0;
while(num<100){
    num+=1;
    console.log(num);
}


For loop

for(let num=0; num<=100;num++){
    console.log(num);
}


//Data Types

let yourAge=18; //number
let yourName ='Bob'; //string
let name ={first:'jane',last:'smith'};//object
console.log(yourAge,yourName,name);


//String in JS(common methods)
let fruit ='banana,apple,orange,blackberry';
let moreFruits ='banana\napple';// \n-new line
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,7));
console.log(fruit.replace('banan','ide'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(3));
console.log(fruit.split(','));//split by a comma
console.log(fruit.split(''));//split by characthers

*/

let fruits =['banana','apple','orange','pineapples'];
fruits = new Array('banana','apple','orange ','pineapples');
//alert(fruits[3]);
console.log(fruits[2]);//acces value at index 2nd
fruits[0]='pear';
console.log(fruits);

for(let i =0; i<fruits.length;i++){
    console.log(fruits[i]);    
}

//Array common methods

console.log(fruits.toString());
console.log('to String\n' ,fruits.toString());
console.log(fruits.join(' - '));
//console.log(fruits, fruits.pop(),fruits);
console.log(fruits.pop(),fruits);
console.log(fruits.push('blackberries'),fruits);
console.log(fruits[4]);  //fruits[fruits.length] =fruits[6]
fruits[4]='new fruit';
console.log(fruits);
fruits.shift();//removes 1st element drom a list
console.log(fruits);
fruits.unshift('kiwi'); //add 1st elem of an array
console.log(fruits);


