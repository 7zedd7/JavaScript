const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros) 

// console.log(marvel_heros); // output => [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); //output => flash



const allHeros = marvel_heros.concat(dc_heros) //output => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(allHeros); 

const all_new_heros = [marvel_heros ,dc_heros] //output => [[ 'thor', 'Ironman', 'spiderman' ],[ 'superman', 'flash', 'batman' ]]

// console.log(all_new_heros); 

//++++++++++++++++Spread operator++++++++++++++++++++++++++++++++++++++++++
const all_new_heros1 = [...marvel_heros ,...dc_heros] //output => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// console.log(all_new_heros1); 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
/*
    ~Flattening an array is the process of reducing the dimensionality of an array.
    ~Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
    ~The flat() method creates a new array with sub-array elements concatenated to a specified depth.
    ~we can specify depth or we can use Infinity to select all multi_dimensional array
*/


// console.log(Array.isArray("Zeel")) // it check that "Zeel" is present in string or not and return true if "Zeel" inside in the Array otherwise False.. In this case it is false
console.log(Array.from("Zeel")) // output => [ 'Z', 'e', 'e', 'l' ]
console.log(Array.from({name: "Zeel"})) // interesting // it will return empty array because it is not specified which one to targe key or value?

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // output => [ 100, 200, 300 ]

/*
    !~The isArray() method in JavaScript is used to determine whether a given value is an array or not.

    !~The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object
    
    !~The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
*/
