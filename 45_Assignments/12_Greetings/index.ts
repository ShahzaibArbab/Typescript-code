/*
12_Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
*/

let Greet:string[]=["Shoaib","Shuhab","Ali"]

    // for loop
    for(let Greets of Greet){
        console.log(`Nice to meet you Mr ${Greets}..`)
    }