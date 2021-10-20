// 1
let muvies = ['Shawshank Redemption', 'Green Mile', 'Forrest Gump']
for(let key of muvies){
    console.log(key)
}
// 2
let cars = ['Mercedes', 'BMW', 'Lexus'];
let str = cars.join(' ')
let arr = str.split(' ')
// 3
let names = ['Elena', 'Sasha', 'Ivan'];
for(let name of names){
    console.log(`Hello, ${name}`)
}
// 4
let numbers = [1, 5, 6, 3]
for(let number of numbers){
    let bul = !! number
}
// 5
let arr = [1,6,7,8,3,4,5,6];
arr.sort().reverse();
// 6
let arr2 = [1,6,7,8,3,4,5,6];
let newArr = []
for(let key of arr2){
    if (key > 3){
        newArr.push(key)
    }
}
// 7
let arr3 = [1,6,7,8,3,4,5,6];
function show(arr, numb){
    return arr[numb]
}
// 8
let i = 21;
while(i >= 10){
    console.log(i)
    i--
}
// 9, 10
for(let i = 0; 21 > i; i++){
    if(i % 2 != 0){
       console.log(i) 
    }     
}