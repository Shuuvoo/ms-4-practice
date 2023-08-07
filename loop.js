// 1. display 'ajke amar mon valo nei ' for 39 times

// var number = 1;
// for( var i = 0; i <= 39 ; i ++){
//     console.log('Ajke Amar mom=n Valo nei', i);
// } 

// 2.  display 58 to 98 

// var number = 58;
// for( var i = 58; i <= 98 ; i ++){
//     console.log(i);
// } 

// 3.show all even number from 412 to 456

// var number = 412;
// while( number <= 456 ){
//     console.log(number);
//     number = number + 2;
// }

// 4. show all odd number between 581 to 623
// var number = 581;
// while( number <= 623 ){
//     console.log(number);
//     number = number + 2;
// }

// 7. create an array for all the mobile phones. Display all the element of the array using a while loop 

// const allMobilePhone = ['apple', 'samsung', 'nokia', 'symphony', 'oppo', 'vivo'];

// let index = 0;
// while(index < allMobilePhone.length){
//     console.log(allMobilePhone[index]);
//     index++;
// }

// 7. run aloop from 30 to 86. this loop stop if the valuie get higher than 50

// for (let value = 30; value <= 86; value++) {
//     console.log(value);
  
//     if (value >= 50) {
//       break; // Stop the loop if the value is higher than 50
//     }
//   }

// 8. write the price of the books that you have.display the price if the price is lower than 200.

const bookPrices = [150, 180, 210, 190, 220, 175];

for (let price of bookPrices) {
  if (price < 200) {
    console.log(price);
  }
}
