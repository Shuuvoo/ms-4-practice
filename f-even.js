function isEven(number){
    const reminder = number % 2 ;
    if( reminder === 0){
        return true;
        
    }
    else{
        return false;
    }

}
const myEvenNumber = isEven(302);
console.log(myEvenNumber);