/*

Name - the name of the coffee
pic - the picture of the coffee 
color - the color associated with the coffee
alt - the alt tag identifying the coffee
day- the day of the week 
desc - a description of the coffee

*/

let myDate = new Date();

let today = myDate.getDay();

let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);


function coffeeTemplate(coffee){
  return `
   <p>  
    		<div id="coffee-cuppic"><img src="${coffee.pic}" alt="${coffee.alt}" /></div>
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>
  `;
}

if(urlParams.has("day")){//from querystring
      today = urlParams.get("day");
   }
   
   today=parseInt(today);

switch(today){
    case 0:
        today = "Sunday";

        coffee = {
          name: "Bubble Tea",
          pic: "images/bubble-tea.jpg",
          alt: "A Picture of a Boba",
          color: "pink",
          day: "Sunday",
          desc: `Boba is straight gas!`
    };
    break;

    case 1:
          today = "Monday";

      coffee = {
      name: "Caramel Latte",
      pic: "images/caramel-latte.jpg",
      alt: "A Picture of a Caramel Latte",
      color: "orange",
      day: "Monday",
      desc: `Caramel Latte is absolute fire!`
};
    break;
    
    case 2:
          today = "Tuesday";

      coffee = {
      name: "Mocha",
      pic: "images/mocha.jpg",
      alt: "A Picture of a mocha coffee",
      color: "brown",
      day: "Tuesday",
      desc: `I heart mocha!`
        };
    break;

    case 3:
          today = "Wednesday";

          coffee = {
            name: "Mocha",
            pic: "images/cold-brew.jpg",
            alt: "A Picture of a cold brew",
            color: "silver",
            day: "Wednesday",
            desc: `Charge your day with some chilling cold brew!`
          };
    break;

    case 4:
          today = "Thursday";

          coffee = {
            name: "Drip Coffee",
            pic: "images/drip.jpg",
            alt: "A Picture of a drip coffee",
            color: "green",
            day: "Thursday",
            desc: `Almost through the week! Get you some drip coffee to push through B)`
          };    
            break;

    case 5:
          today = "Friday";

          coffee = {
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A Picture of a Frappaccino",
            color: "purple",
            day: "Friday",
            desc: `Friday is here! Grab a Frappaccino to celebrate!`
          };
    break;

    case 6:
          today = "Saturday";

          coffee = {
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A Picture of a Pumpkin Spice Latte",
            color: "yellow",
            day: "Saturday",
            desc: `Come chill and relax with our Pumpkin Spice Latte.`
          };
    break;

    default: 
         today = "Day is Unknown";
}

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

console.log(coffee) // Allows us to see the change in the console

