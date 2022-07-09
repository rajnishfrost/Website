// // Array() constructor

// Array literal notation
//  let fruits = ['Apple', 'Banana'];
//  console.log(fruits.length);
//  console.log(fruits[0]);

// let fruits = new Array(2);
// console.log(fruits.length);
// console.log(fruits[0]);

// let fruits = new Array('Apple', 'Banana');
// console.log(fruits.length); 
// console.log(fruits[0]); 

// Static methods
// Array.from()
// Array.isArray()
// Array.of()

// Array.from()
//array from a string
// console.log(Array.from('foo'));
// Array from a Set
//An array-like or iterable object to convert to an array.
// const set = new Set(['foo', 'bar', 'baz', 'foo']);
// console.log(Array.from(set));
// Array from a Map

// Array from a Map
// const map = new Map([[1, 2], [2, 4], [4, 8]]);
// Array.from(map);
// // [[1, 2], [2, 4], [4, 8]]
// const mapper = new Map([['1', 'a'], ['2', 'b']]);
// Array.from(mapper.values());
// // ['a', 'b'];
// Array.from(mapper.keys());
// // ['1', '2'];

// Array.isArray()
// The Array.isArray() method determines whether the passed value is an Array.
// true if the value is an Array; otherwise, false.
// When checking for Array instance, Array.isArray is preferred over instanceof because it works through iframes.

// Array.of()
// he difference between Array.of() and the Array constructor is in the handling of integer arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7
// console.log(Array.of(7));
// console.log(Array(7));

// Array.prototype[@@iterator]()
// The @@iterator method is part of The iterable protocol, that defines how to synchronously iterate over a sequence of values.
// const arr = ['a', 'b', 'c'];
// const eArr = arr[Symbol.iterator]();
// const letterResult = document.getElementById('letterResult');
// for (let letter of eArr) {
//   const li = document.createElement('LI');
//   li.textContent = letter;
//   letterResult.appendChild(li);
// }

// Array.prototype.at()
//need library for this
// const array1 = [5, 12, 8, 130, 44];
// let index = 2;
// console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);

// Array.prototype.concat()
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);

// Array.prototype.copyWithin()
// The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
// const array1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(array1.copyWithin(0, 3));

// Array.prototype.entries()
// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
// const array1 = ['a', 'b', 'c' ,'d'];
// const iterator1 = array1.entries();
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);

// Array.prototype.every()
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array1 = [1, 30, 39, 29, 10, 13 , 41];
// console.log(array1.every(isBelowThreshold));


// Array.prototype.fill()
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
// const array1 = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));

// Array.prototype.filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);

// Array.prototype.find()
// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element >100);
// console.log(found);

// Array.prototype.findIndex()
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
// const array1 = [5, 14, 8 , 130, 44];
// const isLargeNumber = (element) => element > 13;
// console.log(array1.findIndex(isLargeNumber));

// Array.prototype.flat()
//need extenal library
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());

// Array.prototype.flatMap()
// need external library
// The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than calling those two methods separately.
// let arr1 = [1, 2, 3, 4];
// console.log(arr1.map(x => [x * 2]));
// console.log(arr1.flatMap(x => [x * 2]));

// Array.prototype.forEach()
// The forEach() method executes a provided function once for each array element.
// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));
// let a=[1,2,3,4,5]
// a.forEach((e)=>console.log(a.indexOf(e), e));

// Array.from()
// The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
// console.log(Array.from('foo'));

// Array.prototype.groupBy()
// need external library not understable
// The groupBy() method groups the elements of the calling array according to the string values returned by a provided testing function. The returned object has separate properties for each group, containing arrays with the elements in the group.
// This method should be used when group names can be represented by strings. If you need to group elements using a key that is some arbitrary value, use Array.prototype.groupByToMap() instead.
// const inventory = [
//     { name: 'asparagus', type: 'vegetables', quantity: 5 },
//     { name: 'bananas',  type: 'fruit', quantity: 0 },
//     { name: 'goat', type: 'meat', quantity: 23 },
//     { name: 'cherries', type: 'fruit', quantity: 5 },
//     { name: 'fish', type: 'meat', quantity: 22 }
//   ];
//   function myCallback( { quantity } ) {
//     return quantity > 5 ? 'ok' : 'restock';
//   }
//   result = inventory.groupBy( myCallback );

// Array.prototype.groupByToMap()
// Array.prototype.groupBy()

// Array.prototype.includes()
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// const array1 = [1, 2, 3];
// console.log(array1.includes(2));
// // expected output: true

// Array.prototype.indexOf()
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison'));

// Array.prototype.join()
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());
// // expected output: "Fire,Air,Water"
// console.log(elements.join(''));
// // expected output: "FireAirWater"
// console.log(elements.join('-'));
// // expected output: "Fire-Air-Water"

// Array.prototype.keys()
// The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
// const array1 = ['a', 'b', 'c'];
// const iterator = array1.keys();
// for (const key of iterator) {
//   console.log(key);
// }

// Array.prototype.lastIndexOf()
// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
// console.log(animals.lastIndexOf('Dodo'));
// // expected output: 3
// console.log(animals.lastIndexOf('Tiger'));
// // expected output: 1

// Array.prototype.reduce()
// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
// Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:
// const a=[1,2,3,4];
// const b=a.reduce((c,p) => c+p);    
// console.log(b);

// Array.prototype.reduceRight()
// The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
// const a=[[0, 1], [2, 3], [4, 5]].reduceRight((c,p) => c.concat(p));
// console.log(a);

// Array.prototype.reverse()
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// const array1 = ['one', 'two', 'three'];
// const reversed = array1.reverse();
// console.log('reversed:', reversed);

// Array.prototype.shift()
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// const array1 = [1, 2, 3];
// const firstElement = array1.shift();
// console.log(array1);

// Array.prototype.some()
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
// const array = [1, 2, 3, 4, 5];
// // checks whether an element is even
// const even = (element) => element % 2 ===0;
// console.log(array.some(even));
// // expected output: true

// Array.prototype.splice()
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1,0,'Feb');
// months.splice(4,1,'May')
// console.log(months);

// Array.prototype.slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// let a=[1,2,3,4,5];
// console.log(a.slice(3));

