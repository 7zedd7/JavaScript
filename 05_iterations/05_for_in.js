//for in
/*
    The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.
*/

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const map = new Map() 
map.set('IN','India')
map.set('RU','Russia')
map.set('IL','Israel')
map.set('JP','Japan')

for (const key in map){
    // console.log(`${key} short form of ${map[key]}`); 
}

/*
    we cannot iterate over map using for in because it is not suitable for iterating over map
*/