"use strict"

window.onload = function() {

    //Name of Fuction, prefrix INIT to indicate this is the first thing to Do
    initLoadDropdownGiftIdeas()
}

    //Name of Fuction, prefrix INIT to indicate this is the first thing to Do
    initLoadDropdownGiftIdeas();
  
    //Default option
    const giftList = document.getElementById("giftIdeas");
    // giftList.value = "Gift4";
    // giftList.value = null;
    giftList.onchange = changeTheDropDownValue;

let mother = {
    name: "Manuela",
    age: 45,
    occupation: "Being the best",
    hobbies: ["cooking", "spending time together"],
    favoriteColor: "pink",
    birthplace: "Mexico",
    favoriteFoods: ["chilles rellenos", "tamales"],
    favoriteSayings: ["ayudar cuando se puede", "no ay que tener amor por dinero"],
    giftIdeas: ["a vacation to fiji", "a house"]
};

// Create an array of 5 things you want to say to your mother... 
const messages = [
    "Thank you for always being there!",
    "You are my biggest inspiration.",
     "I Love you to the moon and back",
     "How will i ever pay you back for the great mother youve been",
     "I hope to one day repay you for the great mother youve been"
];

function displayMessage(mother) {
    const randomIndex = Math.floor(Math.random() * messages.length);
document.getElementById('message').textContent = messages[randomIndex];
}

function initLoadDropdownGiftIdeas() {
    // load the dropdown list
  //  let states = ["Alabama", "Alaska", "Arizona", ... ];

    let gifts = [
        { idea: "A house", value: "Gift1" },
        { idea: "A vacation", value: "Gift2" },
        { idea: "A rose", value: "Gift3" },
        { idea: "A photoalbum", value: "Gift4" }
    ]


    //Grab the list from HTML
    const giftList = document.getElementById("giftIdeas");
    let amoutOfGifts = gifts.length;
    for (let i = 0; i < amoutOfGifts; i++) {
    // create the option element
    let theOption = document.createElement("option");
    // set the text and value of the option you created
    theOption.textContent = gifts[i].idea; 
    theOption.value = gifts[i].value; 
    // append the option as a child of (inside) the 
    // select element

   // ADDing the elements to the list 
   giftList.appendChild(theOption);
    }

    };

     function DisplayItem() {
        //grab the giftlist
        const giftList = document.getElementById("giftIdeas");

        //let selected value
        let selectedValue = giftList.value;

       let message
        if(selectedValue == "Gift3") {
            document.getElementById("message").innerText = "That is a wonderfull rose";
        }

    }
    
      function ClearFilters() {
        const giftList = document.getElementById("giftIdeas");
        giftList.value = null;
        const searchfield = document.getElementById("mySearchField");
        searchfield.value = "";
      }

      function changeTheDropDownValue() {
        //grab the giftlist
        const giftList = document.getElementById("giftIdeas");
      
        //let selected value
        let selectedvalue = giftList.value;
        document.getElementById("message").innerText = selectedvalue;
      }