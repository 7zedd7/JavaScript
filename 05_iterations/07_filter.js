const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
    // console.log(item);
    return item
})

// console.log(values);
/*
    Without return item:

When you use forEach() without a return statement inside the callback function, it still logs each item in the array but doesn't return anything.
The variable values will be undefined because forEach() doesn't return anything.
With return item:

Even if you add a return statement inside the forEach() callback function, it won't affect the return value of forEach().
The code will still log each item in the array, but values will still be undefined because forEach() doesn't return anything.
In both cases, forEach() is mainly used to perform an action (like logging to the console) for each item in the array. It's not meant for returning values or transforming the array. If you need to return values or transform the array, you'd typically use other array methods like map().
*/

//+++++++++++++++++++++++++++++filter++++++++++++++++++++++++++++++++++

/*
    ->The JavaScript filter() method creates a new array with all elements that pass the test implemented by the provided function.

    ->The filter() method does not change the original array.

    ->The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => {
    return num > 4
})

// console.log(newNums);


myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks =books.filter( (bk) => bk.genre === 'History')

// console.log(userBooks);

userBooks = books.filter ( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History' 
})

console.log(userBooks);