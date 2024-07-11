//14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// Define the list of guest 
let guestList:string[]=["Abdul haseeb","Abdul basit","Muhammad usman"]


guestList.forEach(eligiable => {
    console.log(`Dear ${eligiable} you are invited for the dinner.`)
})

// -----------------------------------------------------------------------

//function to send invitations
/*function sendinvitations(guest:string){
    console.log(`Dear ${guest} you are invited for the dinner.`)
}
sendinvitations("Abdul Haseeb")
sendinvitations("Abdul Basit")
sendinvitations("Abdul Bari")*/