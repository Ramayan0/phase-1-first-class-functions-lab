// Code your solution in this file!
const returnFirstTwoDrivers = function (){ 
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0, 2);
}


const returnLastTwoDrivers = function () {

    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function (fare = 5){
        return fare * int;
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare);
}
const fareTripler = function(fare){
    return createFareMultiplier(3)(fare);
}



function selectDifferentDrivers(drivers, fn){
    return fn(drivers);

}