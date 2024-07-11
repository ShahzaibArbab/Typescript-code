// 22_Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let class_Mates:string[]=["Nabeel","Abdul Bari","Shayan"]
console.log(class_Mates[3])// Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
class_Mates[2]="Shayan"
console.log(class_Mates[2]) // Correcting the error by accessing a valid index.