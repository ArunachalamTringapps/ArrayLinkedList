let arr1 = ["Kawin", "Kumar"];
let arr2 = ["ragul", "gopi", "mohan"];
let arr3 = arr1.concat(arr2);
console.log("1 concat",arr3)


let arr4 = ["kawin", "kumar", "ragul", "gopi", "mohan"];
let arr5=arr4.copyWithin(2, 0, 2);
console.log("2 copyWithin",arr5)


console.log("3 entities")
let arr6 = ["Banana", "Orange", "Apple", "Mango"];
let  arr7 = arr6.entries();

for(let a of arr7)
{
    console.log(a)
}


let even = [12, 22, 31, 41];

console.log("4.every",even.every(checkEven))

function checkEven(even) {
  return even%2==0;
}


let arr8 = ["kawin", "kumar", "ragul", "gopi", "mohan"];
arr8.fill("sai",0,3)
console.log("5.fill",arr8)


let even1 = [12, 21, 32,42]
let res = even1.filter(checkEven)
console.log("6.filter ",res)


let even2 = [11, 22, 32, 42]
let res1 = even2.find(checkEvenFind)
function checkEvenFind(even2)
{
    return even2%2==0
}
console.log("7.find",res1)


let even3 = [11, 22, 32, 42]
let res2 = even3.findIndex(checkEvenFindIndex)
function checkEvenFindIndex(even2)
{
    return even2%2==0
}
console.log("8.findindex",res2)


console.log("9.for each")
let numbers = [1,2,3,4,5,6];
numbers.forEach(myFunction)

function myFunction(value, index, arr9) {
  arr9[index] = value * 10;
  console.log(arr9[index])
}


let arr10 = Array.from("kawin")
console.log("10.Arrayfrom ",arr10)


let arr11 = ["kawin", "kumar", "ragul", "gopi", "mohan"];
console.log("11.includes",arr11.includes("kumar",1))


let arr12 = ["kawin", "kumar", "ragul", "gopi", "kumar"];
let index = arr12.indexOf("kumar",3);
console.log("12.index",index)


let arr13 = ["kawin", "kumar", "ragul", "gopi", "kumar"];
let result = Array.isArray(arr13);
console.log("13.isarray",result)


let arr14 = ["kawin", "kumar", "ragul", "gopi", "kumar"];
let result1 = arr14.join();
console.log("14.isarray",result1)


let arr15 = ["kawin", "kumar", "ragul", "gopi", "kumar"];
let keys = arr15.keys();

let text = "";
for (let x of keys) {
  text += x ;
}
console.log("15.keys",text)


let arr16 = ["kawin", "kumar", "ragul", "gopi", "gopi"];
let index1 = arr16.lastIndexOf("gopi");
console.log("16.lastIndexOf",index1)


let arr17 = ["kawin", "kumar", "ragul", "gopi", "mohan"];
let length = arr17.length;
console.log("17.length",length)


let arr18 = [1,2,3,4,5];
let newArr = arr18.map(myfunction)

function myfunction(num) {
  return num * 10;
}
console.log("18.map ",newArr)




let arr19 = ["kawin", "kumar", "ragul", "gopi", "mohan"];
arr19.pop();
console.log("19.pop ",arr19)


let arr20 = ["kawin", "kumar", "ragul", "gopi"];
arr20.push("mohan");
console.log("20.push ",arr20)


let arr21 = [1,2,3,4,5];
let res3 = arr21.reduce(getSum, 0);

function getSum(total, num) {
  return total + num };
console.log("21.reduce ",res3)


let arr22 = [1,2,3,4,5];
let res4 = arr22.reduceRight(myFunc);

function myFunc(total, num) {
  return total - num;
}
console.log("22.reduce right ",res4)


let arr23 = [1,2,3,4,5];
arr23.reverse();
console.log("23.reverse ",arr23);


let arr24 = ["kawin", "kumar", "ragul", "gopi"];
arr24.shift()
console.log("24.shift ",arr24)


let arr25= ["kawin", "kumar", "ragul", "gopi"];
let citrus = arr25.slice(1, 3);
console.log("25.shift ",citrus)


let even4 = [12, 22, 32, 42];

console.log("26.some",even4.some(checkEven))



let even5 = ["kawin", "kumar", "ragul", "gopi"];
even5.sort();
console.log("27.sort",even5)


let arr26 = ["kawin", "kumar", "ragul", "gopi"];

arr26.splice(2, 0, "saran", "aravi");
console.log("28.splice",arr26)


let arr27 = ["kawin", "kumar", "ragul", "gopi"];
res4=arr27.toString();
console.log("29.toString",res4);


let arr28 = ["kawin", "kumar", "ragul", "gopi"];
arr28.unshift("saran","aravi");
console.log("30.unshift",arr28);


let arr29 = ["kawin", "kumar", "ragul", "gopi"];
let res5= arr29.valueOf();
console.log("31.valueOf",res5);