// const myInch = 75;
// const myFeet = myInch/12;
// console.log(myFeet);

//Used function inch To Feet.

function inchToFeet(inch){
    const feet = inch / 12 ;
    return feet ;

}
const dadaInch = 144 ;
const dadaFeet = inchToFeet(dadaInch);
console.log(dadaFeet);

function milesToKilometer(miles){
    const kilometer = miles * 1.609 ;
    return kilometer ;
}
const givenMiles = 12;
const result = milesToKilometer(givenMiles);
console.log('kilometers is', result);

