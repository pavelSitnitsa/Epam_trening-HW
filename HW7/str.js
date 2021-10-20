// 1
let str = 'ahb acb aeb aeeb adcb axeb'
let result = str.replace(/a..b/g, '')

// 2
let str2 = '2+3 223 2223'
let result2 = str2.replace(/2+3/g, '');

// 3
let day = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear();

console.log(day)
console.log(month)
console.log(year)
