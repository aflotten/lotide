# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @aflotten/lotide`

**Require it:**

`const _ = require('@aflotten/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays`: A function that returns true or false depending on whether two given arrays are identical or not.
* `eqObjects`: A function that returns true or false depending on whether two given objects are identical or not.
* `assertArraysEqual`: An assertion function to print out a success or fail message if two arrays are equal or not (requires eqArrays function).
* `assertEqual`: An assertion function to print out a success or fail message if two given parameters are identical (no type coercion).
* `assertEqualObjects`: An assertion function to print out a success or fail message if two given objects are identical (requires eqObjects function)
* `countLetters`: A function that takes in a string as a parameter an emits an object containing each character and how many times they appeared in the string.
* `countOnly`: Similar to countLetters, this function takes in two paramters of 'all items' and 'itemsToCount' to return how many times the 'itemsToCount' appears in 'all items'.
* `findKey`: A function that takes in an object and a callback function. If the callback function is true at a given key of the object, it will return that key.
* `findKeyByValue`: A function that takes in an object and a given value, where if the value matches a key in the object, it will return that key.
* `flatten`: A function that takes in an array with nested arrays and will return one array with all values on the same level (Up to one level of nested arrays).
* `head`: A function that returns the first value in an array.
* `letterPositions`: A function that takes in a string and returns the charcters within that string and at what idex they appear at in the string. 
* `map`: A function that takes in an array and a callback function. It will modify the array with the callback function and then return the new array.
* `middle`: A function that will return the value in an array at the very middle index. For even length arrays it will return the the middle two values.
* `tail`: A function that will return all the values of the array with the exemption of the very first value. 
* `takeUntil`: A function that takes in an array and a callback function. The function will push the items of the array to a new one until the callback function executes and it will terminate.
* `without`: A function that takes in a source array and an itemToRemove argument. It will return a new array without the itemToRemove value. 