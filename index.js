// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    if (blocks <= 42) {
        return 42 - blocks
    } else {
        return blocks - 42;
    }
}

function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264
}

function distanceTravelledInFeet(a, b) {
    if (b > a) {
        return (b - a) * 264
    } else {
        return (a - b) * 264
    }
}

function calculatesFarePrice(a, b) {
    let distance = distanceTravelledInFeet(a, b);
    if (distance <= 400) {
        return 0
    } else if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * .02;

    } else if (distance > 2000 && distance <= 2500) {
        return 25
    }
    else if (distance > 2500) {
        return 'cannot travel that far'
    }
}