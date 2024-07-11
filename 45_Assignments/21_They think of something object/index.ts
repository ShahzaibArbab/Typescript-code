// ## 21_They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let book : {
    title:string,
author:string,
year_Published:number
} = {
    title:"My Life",
author:"Shahzaib",
year_Published:2024
}
console.log(`Book info : ${book.title} by ${book.author} in ${book.year_Published}`)
