/*
3_Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let person_Name:string = "ShahZaib"
console.log(person_Name.toLowerCase())
console.log(person_Name.toUpperCase())
console.log(person_Name.charAt(0).toUpperCase()+person_Name.slice(1).toLowerCase())

console.log(person_Name.trim())