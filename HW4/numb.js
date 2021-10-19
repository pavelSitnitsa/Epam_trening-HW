function numb(value){
    if(value > 1 && value % 2 != 0){
        return('prime number')
    } else{
        return('number is not prime')
    }
}

console.log(numb(6))