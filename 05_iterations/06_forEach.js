//forEach
/*
    The forEach() method is a built-in function in JavaScript used to iterate over elements of an array. It executes a provided callback function once for each element in the array, in ascending order, and does not mutate the original array. The callback function is invoked with three arguments: the value of the current element, the index of the current element, and the array being traversed. It does not return a new array but rather executes the provided callback function for each element of the array.
*/


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// })


//arrow function
// coding.forEach((item) => {
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

/*
    The printMe function is used as the callback function for the forEach() method.
*/

coding.forEach( (item , index , arr) => {
    // console.log(item ,index , arr);
} )

/*
    ->item represents the current element being processed in the array.

    ->index represents the index of the current element.

    ->arr represents the array that forEach is being called on.
*/

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "JS"
    },
    {
        languageName: "Java",
        languageFileName: "JAVA"
    },
    {
        languageName: "Python",
        languageFileName: "PY"
    },

]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
    // console.log(item.languageFileName);
})