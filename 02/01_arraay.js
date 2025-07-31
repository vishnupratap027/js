// array

const myarr = [0,1,2,3,4,5];
myarr.push(6)
myarr.push(7)
myarr.pop()
myarr.unshift(9)

console.log(myarr[0])
console.log(myarr)

console.log(myarr.includes(9))
console.log(myarr.indexOf(19))

const newArr = myArr.join()

const myn1 = myArr.slice(1,3);

console.log(myn1)
console.log("b",myarr)

const myn2 = myArr.splice(1,3)
console.log(myn2)
//slice will not alter the original but on the other hand splice change the original array

