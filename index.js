// Code your solution in this file!

// basic assumption is that this will require 4 functions for the four requests.
// we'll want absolute value difference 
// we aren't going to be calculating avenues differently than blocks
// Average block is 264 feet
// taking multiple parameters is necessary to determine start and end point unless we create a static end point. 
function distanceFromHqInBlocks(startingPoint) {
    let x = (42 - startingPoint)
    return Math.abs(x)
}


function distanceFromHqInFeet(startingPoint) {
    let y = distanceFromHqInBlocks(startingPoint)*264
    return y
}

function  distanceTravelledInFeet(start, destination) {
    let z = destination - start
    let x = Math.abs(z)*264
    return x
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0
    }
    if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000){
        return (distanceTravelledInFeet(start, destination)-400)*.02
    }
    if (distanceTravelledInFeet(start, destination)>2000 && distanceTravelledInFeet(start, destination)<2500){
        return 25
    }
    if (distanceTravelledInFeet(start, destination) > 2500){
        return ('cannot travel that far')
    }
}

