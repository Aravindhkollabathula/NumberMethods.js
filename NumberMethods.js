var a = 20
var b = "30"
var c = 35
// b = Number(b)
// b = parseInt(b)

var sum = a+b+c
console.log(sum)
console.log(typeof sum)

var z = "25.880"
console.log(typeof z,z)
z = parseInt(z)
console.log(typeof z,z)

s = 165
console.log(typeof s)
s = s.toString()
console.log(typeof s)

balance = 20.56432
balance = balance.toFixed(2)
console.log(balance)

//round number

bill = 435.567
console.log(bill)
bill = Math.round(bill)
console.log(bill)

//ceil

ceilbill = Math.ceil(bill)

grocerybill = 345.1
console.log(Math.ceil(grocerybill))

//floor

console.log(bill)
console.log(Math.floor(bill))

// power of a number
powervalue = Math.pow(8,2)
console.log(powervalue)

//sqare root of number

sqrtvalue = Math.sqrt(100)
console.log(sqrtvalue)

//absolute value always gives a positive value

hyderabad = 600
vijayawada = 350
distance = 350-600
distance = Math.abs(distance)
console.log(distance ,"distance b/t hyd to vj")

//finding max and min number

maxvalue = Math.max(1,3,4,5,6,555,66,777)
minvalue = Math.min(1,3,4,5,6,555,66,777)

console.log("maxvalue=",maxvalue,"minvalue=",minvalue)



