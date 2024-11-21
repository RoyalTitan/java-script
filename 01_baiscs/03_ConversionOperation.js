let score = "33abc" 

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)


// "33" => 33
// "3aabc" =>NaN
// true => 1; false => 0

let isLoggedIn = 1

let valueINstring = Boolean(isLoggedIn)
console.log(valueINstring)

// 1 => true; 0 => false
// "" => false
// "harsh" = true

let someNumber = 9

let string = String(someNumber)
console.log(string)
console.log(typeof (string))
