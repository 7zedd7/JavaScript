//Map

/*
    The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
*/

const map = new Map() // here M should capital
map.set('IN','India')
map.set('RU','Russia')
map.set('IL','Israel')
map.set('JP','Japan')

// console.log(map); 

// Using for of in map

console.log("Before Change");
console.log(" ");

for(const [key,value] of map) {
    console.log(key,'>>>>',value);
}

console.log(" ");
console.log("After Change");
console.log(" ");

map.set('IN', 'Bharat')
for(const [key ,value] of map){
    console.log(key,'>>>>',value);
}