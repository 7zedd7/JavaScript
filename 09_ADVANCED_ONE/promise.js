const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Operation 1 Completed");
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise 1 Consumed")
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Operation 2 Completed");

    }, 1000)
    resolve();
}).then(function () {
    console.log("Promise 2 Consumed")

})

const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Zeel", email: "zeel@google.com", password: "123456" })
    }, 1000)
})

promiseTwo.then(function (user) {
    console.log(user)
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Zeel", password: "123456" })
        }
        else {
            reject("Error Occured")
        }
    }, 1000)
})

promiseThree
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The Promise is either resolved or rejected"));

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "JavaScript", password: "123456" })
        }
        else {
            reject('Error: JS went Wrong')
        }
    }, 1000)
});

async function consumePromiseFour() {
    try {
        const response = await promiseFour
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}

consumePromiseFour()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log("E:",error);
//     }
// }

// getAllUsers();

fetch("https://api.github.com/users/7zedd7")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})