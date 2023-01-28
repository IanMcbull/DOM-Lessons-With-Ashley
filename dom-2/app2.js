// Step 1: Get the element from the DOM
// Step 2: Listen for an event on that element



function add(x,y){
    console.log(x+y)
}

add(2,3)

function changeColor(){
    console.log("Button has been clicked")
    // Get an element from the DOM that has an ID of circle
    let circleElement = document.getElementById('circle')
        
    circleElement.style.backgroundColor = "blue"
}
document.getElementById('btn')
.addEventListener('click',changeColor)


// All programming languages take in some input and give back output


// Data types

// string values
// number values
// boolean values
// objects
// array values
// null values
// undefined values


// Variables
// let firstName = "Ian";
// const age = 26;
// var secondName = 'Smith';

let isAdult = false;
let isGender = undefined;
let isAge = null;
let ian = {
    firstName:'Ian',
    isAdult:true
}
let favColors = ["Red", "Green", "Yellow"]





// function barking(){
//     return "whoof"
// }
// barking()

// const barking = function(){
//     return "whoof"
// }

// barking()




// Function declaration
function add(num_one,num_two){
  return num_one + num_two
}
// function invokation
add(10,10)


































