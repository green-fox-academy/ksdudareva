//Create an empty list which will contain names (strings)
let myList: string [] = [];

//Print out the number of elements in the list
console.log(myList);

//Add William to the list
myList.push('William');

//Print out whether the list is empty or not
if (myList.length === 0) {
    console.log('The list is empty');
} else {
    console.log('The list is not empty');
};

//Add John to the list
myList.push('John');

//Add Amanda to the list
myList.push('Amanda');

//Print out the number of elements in the list
console.log(myList.length);

//Print out the 3rd element
console.log(myList[2]);

//Iterate through the list and print out each name
myList.forEach(function(name) {console.log(name)});

//Iterate through the list and print out each name
myList.forEach(function(name, index) {console.log(index + '. ' + name)});

//Remove the 2nd element
myList.splice(1,1);
console.log(myList);

//Iterate through the list in a reversed order and print out each name
myList.reverse();
myList.forEach(function(name) {console.log(name)});

//Remove all elements
myList.splice(0, myList.length);
console.log(myList);