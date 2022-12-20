'use strict';

// YOU KNOW WHAT TO DO //
/**
 * identity: Function take in any value and return the input value unchanged
 * 
 * @param {Any value} value: Function takes in any input value
 * @return {Any value} : Function returns input value unchanged
 */

 function identity(value){
    //returns input value unchanged
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Function takes in any value and returns that type of value as a string
 * 
 * @param {Any value} value: Function takes in any input value
 * @return {String} : Returns the type of value as a string
 */

  function typeOf(value){
    //determine if value is an array
    if(Array.isArray(value)){
        //return array as a string
        return 'array';
        //else if value is not null
    }else if(value === null){
        //return null as a string
        return 'null';
        //else if value is not an instance of date
    }else if(value instanceof Date){
        //return date as a string
        return 'date';
        //else if value is a number
    }else if(typeof value === 'number'){
        //return number as a string
        return 'number';
        //else if value is a string
    }else if(typeof value === 'string'){
        //return string as a string
        return 'string';
        //else if value is a bool
    }else if(typeof value === 'boolean'){
        //return boolean as a string
        return 'boolean';
        //else if value is an object
    }else if(typeof value === 'object'){
        //return object as a string
        return 'object';
        //else if value is undefined
    }else if(typeof value === 'undefined'){
        //return undefined as a string
        return 'undefined';
        //else if value is a function
    }else if(typeof value === 'function'){
        //return function as a string
        return 'function';
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Function that take in an array and a number and determines if array is not array and returns a empty array if 
 * not an array. Determines if number is not given then return first element in array. Returns whole array if
 * number is greater than arrays length. Returns empty array if number is negative.
 * 
 * @param {Array} array: Function takes in an array
 * @param {Number} num: Function takes in a number
 */
function first(array, num){
    //determine if array isnt an array
    if(!Array.isArray(array)){
       //return empty array
       return [];
    }
    //determine if number is not given
    if(num === undefined){
       //return the first element in array
       return array[0];
    }
    //determine if number is greater than the arrays length
    if(num > array.length){
       //return whole array
       return array;
    }
    //determine if number is a negative number
    if(num < 0){
       //return empty array
       return [];
    }//return array sliced
       return array.slice(0, num);
   }
module.exports.first = first;

/**
 * last: Function that takes in an array and a number and determines if array is not array and returns a empty array if 
 * not an array. Determines if number is not given then return last element in array. Returns whole array if
 * number is greater than arrays length. Returns empty array if number is negative.
 * 
 * @param {Array} array: Function takes in an array
 * @param {Number} num: Function takes in a number
 */
function last(array, num){
    //determine if array is an array
    if(!Array.isArray(array)){
        //return empty array
        return [];
    }//determine if number is not given
    if(num === undefined){
    //return the last element in array
    return array[array.length - 1];
    }
    //determine if number is greater than the arrays length
    if(num > array.length){
    //return whole array
    return array;
    }
    //determine if number is a negative number
    if(num < 0){
    //return empty array
    return [];
    }//return array sliced
    return array.slice(1);
}
module.exports.last = last;

/**
 * indexOf: Function that takes in a array and a value and returns the index of array that is the
 * first occurrance of value and returns -1 if the value is not found.
 * @param {Array} array: Function takes in an array
 * @param {Value} value: Function takes in any value
 * @return {Index} i: Function return the index of array that is thte first occurance of value
 */
function indexOf(array, val){
    //iterate through array
    for(let i = 0; i < array.length; i++){
        //if array[i] includes the first occurance of value
        if(array[i].includes(val)){
            //return index
            return i;
        }
    }//return -1 if array[i] does not include the first occurance of value
    return -1;
}

module.exports.indexOf = indexOf;

/**
 * contains: Function that determines whether the collection contains a given item or not. If it contains the
 * item then it returns true otherwise false
 * 
 * @param {Array} array: Function takes in an array
 * @param {value} value: Function takes in any input value
 * @return {Boolean} true or false: Function returns true or false depending if array contains value
 */
function contains(array, value){
    //ternary operator array contains value return true else return false
   return array.includes(value) ? true : false
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
/**
* unique: Function that searches through an array of objects, and removing any duplicates
* and returns a new array of all elements from array with duplicates removed.
*
* @param {array} array: Function takes in an array 
* @return {array} newArr:Function returns a new array with duplicates removed
*
*/
function unique(array){
    //create a new array
    var newArr = [];
    //iterate through array
    for(let i = 0; i < array.length; i++){
       //determine if the new array doesnt contain targeted value in given array
       if(newArr.indexOf(array[i]) === -1){
           //push arrray[i] into new array
           newArr.push(array[i]);
       }
    }
      //return new array
      return newArr;
   }
   module.exports.unique = unique;

/**
 * filter: Function that creates a new array of elements for which calling function returned true
 * 
 * @param {array} array: Function takes in an array.
 * @param {function} func: Function takes in a function to run for each array in element.
 * @return {array} arr: Function returns a new array containing all the array elements that pass the given condition.
 *  
 */
function filter(array, func){
    //create a empty array
    var arr = [];
    //iterate through array
    for(let i = 0; i < array.length; i++){
        //determine if calling func with its element, index and array passed in is true
        if(func(array[i], i, array) === true){
            //push in array[i] into new array
            arr.push(array[i]);
        }
    }
    //return arr
    return arr;
}
module.exports.filter = filter;

/**
 * reject: Function that creates a new array of elements for which calling function returned false
 * 
 * @param {array} array: Function takes in an array.
 * @param {function} func: Function takes in a function to run for each array in element.
 * @return {array} arr: Function returns a new array containing all the array elements that do not pass the given condition.
 *  
 */
function reject(array, func){
    //create a new array
    var output = [];
    //iterate through array
    for(let i = 0; i < array.length; i++){
        //determine if calling func with its element, index and array passed in is false
        if(func(array[i], i, array) === false){
            //push in array[i] into new array;
            output.push(array[i]);
        }
    }
    //return output array
    return output;
}
module.exports.reject = reject;

/**
 * partition: Function that is used to get an array as input and returns two arrays.The first array 
 * containing those elements that satisfy the condition and the second array contains the remaining elements.
 * 
 * @param {array} array: Function takes in an array
 * @param {function} func: Function takes in a function to run for each element in array
 * @returns {array} subArray: Returns an array of sub arrays.
 */
function partition(array, func){
    //creat array
    var arr = [];
    //create a new array
    var arr1 = [];
    //create another array 
    var arr2 = [];
    //iterate through input array
    for(let i = 0; i < array.length; i++){
        //determine if  calling the func  and passing  in all elemnt, index and array is true 
        if(func(array[i], i, array) === true){
        //push in array[i] to arr1
        arr1.push(array[i]);
        }
        //determine if  calling the func  and passing  in all elemnt, index and array is false
        if(func(array[i], i, array) === false){
            //push in array[i] to arr2
            arr2.push(array[i]);
        }
    }//use spread operator to push in arr1 and arr2 with array literals around them into arr to create 2 sub arrays
    var subArray = [...arr, ...[arr1], ...[arr2]];
    //return subArray
    return subArray;
}
module.exports.partition = partition;

/**
 * map: Function that iterates through an input collection and passes each item into a callback function. 
 * Whatever this callback function returns is pushed into an output array that map returns.
 * 
 * @param {collection} Array or Object: Function takes in a collection parameter which can be an object or array
 * @param {Function} func: Function to be called once on each item in the array
 * @return {Array}: Function returns the array of the values from the input array 'transformed' by the
 * callback function.
 */
function map(collection, func){
    //create a output array
    var output = [];
    //determine if collection is an array
         if(Array.isArray(collection)){
             //iterate through collection 
        for(let i = 0; i < collection.length; i++){
        //call function and pass in element, index and collection and push into output array
        output.push(func(collection[i], i, collection));
        //else its an object
        }
            }else {
            //iterate through collection(object)
            for(let key in collection){
            //call function and pass in its value, key and collection and push into output array
            output.push(func(collection[key], key, collection));
             }
         }       
    //return output array
    return output;
}
module.exports.map = map;

/**
 * pluck: Function iterates through input array and returns an array containing the value of property for
 * every element in array.
 * 
 * @param {array} array: Function takes in an array of objects to iterate through.
 * @param {property} prop: Function takes in a property.
 * @return {array} arr: Function returns a new array containing the value of prop for every element in array.
 */
function pluck(array, prop){
    //create a new array
    var arr = [];
    //iterate through array
    for(let i = 0; i < array.length; i++){
        //push array[i]and input prop into new array
        arr.push(array[i][prop]);
    }
    //return array
    return arr;
}
module.exports.pluck = pluck;