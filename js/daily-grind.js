/*

Name - the name of the coffee
pic - the picture of the coffee 
color - the color associated with the coffee
alt - the alt tag identifying the coffee
day- the day of the week 
desc - a description of the coffee

*/

let myDate= new Date();

let today = myDate.getDay();

//today = 3; Testing other days

switch(today){
     case 2:
          today = "Tuesday";
     break;

     case 3:
          today = "Wednesday";
     break;

     default: 
         today = "Day is Unknown";
}

let coffee = {
    name: "Bubble Tea",
    pic: "images/bubble-tea.jpg",
    alt: "A Picture of a bubble tea",
    color: "pink",
    day: "Wednesday",
    desc: `I love me some boba!`
}
console.group(coffee) // Allows us to see the change in the console 