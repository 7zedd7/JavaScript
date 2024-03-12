// Array

/*
    ~arrays are resizable and can contain a mix of different data types.
    ~JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
    ~JavaScript arrays are zero-indexed
    ~JavaScript array-copy operations create shallow copies.
*/

const myArr = [0,1,2,3,4,5]
const myHeros = ["Spiderman" ,"Superman" ]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

//Array Methods

myArr.push(6)  //output => [0, 1, 2, 3, 4, 5, 6]
myArr.push(7)  //output => [0, 1, 2, 3, 4, 5, 6, 7]
myArr.pop() //output => [0, 1, 2, 3, 4, 5, 6]

console.log(myArr);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//unshift
// myArr.unshift(0)  //output => [0, 0, 1, 2, 3, 4, 5, 6]
// myArr.unshift(9) //output => [9, 0, 0, 1, 2, 3, 4, 5, 6]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//shift
// myArr.shift() //output => [ 1, 2, 3, 4, 5, 6 ]
// myArr.shift() //output => [ 2, 3, 4, 5, 6 ]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(myArr.includes(9));  //output => false
console.log(myArr.indexOf(3)); //output => 3

const newArr = myArr.join()
console.log(newArr); // output => 0,1,2,3,4,5,6
/*
join() method is used to join the elements of an array into a string. The elements of the string will be separated by a specified separator and its default value is a comma(,).
*/

console.log(myArr);

//slice , splice

console.log("A: " , myArr);  //output => A:  [0, 1, 2, 3, 4, 5, 6]

const myn1 = myArr.slice(1,3)
console.log("B: ",myn1);    //output => B:  [ 1, 2 ]

const myn2 = myArr.splice(1,3)  
console.log("C" , myArr);   //output => [ 0, 4, 5, 6 ]
console.log(myn2);          //output => [ 1, 2, 3 ]


/* Difference between slice and splice

    ~Slice: Extracts a section of an array and returns a new array.

    Splice: Changes the content of an array by removing, replacing, or adding elements.

*/
