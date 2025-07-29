//terminal commmand to get the output goes like node 01_basics/04_comparision.js and this is an example to the changes accordinly
console.log(null >5);
console.log(null >= 5);
console.log(null <= 5);
//The Reason is that and equality check == and comparisons ><>=<= work differentyly. Comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1)null >0 is false.

console.log(undefined ==0);


// === strict check
console.log("2" == 2);