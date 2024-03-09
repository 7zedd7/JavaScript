//basic comparison
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
/* 
    The string "2" is converted to the number 2, 
    and the comparison 2 > 1 evaluates to true.
*/

console.log("02" > 1); 
/* 
   The string "02" is converted to the number 
   2 (leading zeros are ignored when converting to a number), 
   and the comparison 2 > 1 also evaluates to true.
*/

console.log(null > 0); false
console.log(null == 0); false
console.log(null >= 0); true

/*  the reason is that and equality check == and comparisons >,<,>=,
    <= work differently

    comparison convert null to number , treating it as 0.
    That's why console.log(null >= 0) returns  true and 
    console.log(null > 0) return  false

*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// == and ===

console.log("2" == 2); // it will convert "2" into number first then compare
console.log("2" === 2); // it will not convert "2" into number