// An object is key:value pair

// Variables
// Desc: Used to store values
// Declaring a variable

// Mutable variables
// You can change the values
//var animals = []

// Mutable variables
// You can change the values
let firstName = "Ian Smith";
// console.log(firstName)
firstName = "Ashley"












//console.log(firstName)



firstName = "Ashley"
//console.log(firstName)

// Immutable Variables
// You cannot change the values

const secondName = 'Jake'

//console.log(secondName)


const age = 55
const age2 = 23
// console.log(age)
// console.log(age2)

const canDrive = false
const canDrink = true

// console.log(canDrive)
// console.log(canDrink)

let vehicle = {
    color:"Red",
    model:"Tesla",
    year:2009
}

// Function declaration
function sum(num_one,num_two) 
{
  // The body of the function
  return num_one + num_two
}

// Invoking the function
// function invocation

//console.log(sum(10,20))
//console.log(sum(50,40))

// Write a function that returns the difference between two numbers

//console.log(sum(30,80))

function difference(num_one,num_two){
  return num_one - num_two;
}

//console.log(difference(50,10))


function product(num_one,num_two){
    return num_one * num_two;
}

//console.log(product(5,20))


function capitalizeName(name){
  return name.toUpperCase()
}

let dog = {
    name:"Sparkly",
    age:2,
    bark:function(){
       return "Whoof"
    }
}

dog.bark()

let consoleExampleObject = {
    log:function(param){
     return param
    }
}

let shoes = {
    color:["Red", "Green", "Yellow"],
    make:"",
    lace:false
}

// console.log(capitalizeName(shoes.color[0]))
// console.log(capitalizeName("Ashley"))




// Listening for events
// Phase 1 Building the UI
// Phase 2 Listening for events


// document object
//console.log(document.getElementById("button_one"))

// Step One: Get the element from the DOM

// Step two: Listen for an event on that element

// function declaration
function add(){
  // When we do not explicitly return, undefined is returned by default

  console.log(10 + 10)
}
// Function Call or function invocation
// console.log(add())




document.getElementById('button_one')
.addEventListener('mouseover',add)

// document.getElementById("button_one").addEventListener('click',function(){
//   console.log("Button One was clicked")
// })


// Step One: Get the element from the DOM
//document.getElementById('button_two')

// Step Two: Add an event listener
document.getElementById('button_two')
.addEventListener('click',function(){
  console.log("Button 2 clicked")
})


// console.log(document.getElementById("button_one"))
// console.log(document.getElementsByClassName('button'))






// Step 1: Get the element from the DOM
// Step 2: Listen for an event on the element

// document.getElementById('textfield')
// .addEventListener('keypress',function(){
//   console.log("User is typing")
// })

































































//console.log(vehicle.year)




// console.log(vehicle.color)
// console.log(vehicle.model)
// console.log(vehicle.year)

let firstNames = ["Ian", "Ashley", "Mike"]
// console.log(firstNames) 


// Data types
// Strings
// Number
// Boolean
// Objects
// Arrays