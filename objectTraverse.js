//对象属性的遍历
let s = Symbol("a")
let obj = {
    name:"miumiu",
    age:20,
    hobby:{
        favorite:"coding",
        usually:"coding"
    }
}
obj[s] = "hello"//加入一个symbol属性
obj.__proto__ = {
    a:"a",
    b:"b"
}

//遍历方式一：for in 包含原型链属性,不包含symbol
for(let i in obj){
    console.log(i)
}
console.log("---------")
//注意不能用for...of，for...of只能遍历可迭代对象，字节面试的时候问过

//遍历方式二：Object.keys(),不包含原型链属性,不包含symbol属性，只包含可枚举的
for(let keys of Object.keys(obj)){
    console.log(keys)
}
console.log("---------")
//注意这里Object.keys()返回的是一个数组，所以用for of合适

//遍历方式三：Object.getOwnPropertyNames()，不包含原型链属性，不包含symbol属性，包含不可枚举的
for(let names of Object.getOwnPropertyNames(obj)){
    console.log(names)
}
console.log("---------")
//同二，返回的是一个数组

//遍历方式四：Object.getOwnPropertySymbols(),返回自身所有的symbol属性
for(let symbols of Object.getOwnPropertySymbols(obj)){
    console.log(symbols)
}
console.log("---------")

//遍历方式五：Reflect.ownKeys(),返回自身的所有的属性，包含symbol，也包含不可枚举的
for(let keys of Reflect.ownKeys(obj)){
    console.log(keys)
}
console.log("---------")
