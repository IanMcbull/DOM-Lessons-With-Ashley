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