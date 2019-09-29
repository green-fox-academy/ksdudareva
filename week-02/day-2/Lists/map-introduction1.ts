//Create an empty map where the keys are integers and the values are characters
let myMap = {};

//Print out whether the map is empty or not
if (Object.keys(myMap).length === 0) {
    console.log("Empty map");
} else {
    console.log("Map is not empty");
}

//Add the following key-value pairs to the map
myMap = {
    97: 'a',
    98: 'b',
    99:	'c',
    65:	'A',
    66:	'B',
    67:	'C'
};

//Print all the keys
console.log(Object.keys(myMap));

//Print all the values
console.log(Object["values"](myMap));

//Add value D with the key 68
myMap[68] = 'D';
console.log(Object.keys(myMap));

// Print how many key-value pairs are in the map
console.log(Object.keys(myMap).length);

//Print the value that is associated with key 99
console.log(myMap[99]);

//Remove the key-value pair where with key 97
delete myMap[97];
console.log(Object.keys(myMap));

//Print whether there is an associated value with key 100 or not
if(myMap[100]) {
    console.log('there is a value');
} else {console.log('there is no value')};

//Remove all the key-value pairs

Object.keys(myMap).forEach(function(i) {
    delete myMap[i];
});

console.log(Object.keys(myMap));
