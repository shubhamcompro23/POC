// You have two strings as input.
// Write a function that validates whether the strings are anagrams of each other. If the two strings are anagrams of each other then, return true; else, return false.

// Time Complexity: O(nlogn)
// Space Complexity: O(n)

// Note: Two strings are said to be anagram if we can form one string by arranging the characters of another string

// For example:

// Example 1:
// Input: "care", "race".
// Output: true

// Example 2:
// Input: "crime", "slime".
// Output: false


// solution 1

function checkAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

console.log(checkAnagrams("care", "car"))

// solution 2

function sortString(string) {

    const array = [];
    for (let i = 0; i < string.length; i++) {
        array.push(string[i]);
    }



    function mergeSort(array) {
        if (array.length <= 1) {
        return array;
        }
    
        const midpoint = Math.floor(array.length / 2);
        const leftHalf = array.slice(0, midpoint);
        const rightHalf = array.slice(midpoint);
    
        const sortedLeftHalf = mergeSort(leftHalf);
        const sortedRightHalf = mergeSort(rightHalf);
    
        return merge(sortedLeftHalf, sortedRightHalf);
    }
  
    function merge(leftHalf, rightHalf) {
        const mergedArray = [];
    
        let leftIndex = 0;
        let rightIndex = 0;
    
        while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
        if (leftHalf[leftIndex] <= rightHalf[rightIndex]) {
            mergedArray.push(leftHalf[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(rightHalf[rightIndex]);
            rightIndex++;
        }
        }
    
        while (leftIndex < leftHalf.length) {
        mergedArray.push(leftHalf[leftIndex]);
        leftIndex++;
        }
    
        while (rightIndex < rightHalf.length) {
        mergedArray.push(rightHalf[rightIndex]);
        rightIndex++;
        }
    
        return mergedArray;
    }

    const sortedArray = mergeSort(array);
    const sortedString = sortedArray.join("");
    return sortedString
    
}

function checkAnagrams(str1,str2) {
    const sortedStr1 = sortString(str1)
    const sortedStr2 = sortString(str2)
    return sortedStr1 === sortedStr2;
}

console.log(checkAnagrams("care", "race"))

// Solution 3

function anagram(str1,str2) {
    if (str1.length != str2.length){
        return false;
    }
    let obj = {}
    obj["key"] = 0

    for (let i = 0; i < str1.length; i++) {
        if(obj[str1[i]]){
            obj[str1[i]]++
        }else{
            obj[str1[i]] = 1
        }
        
    }
    for (let i = 0; i < str2.length; i++) {
        if(obj[str2[i]]){
            obj[str2[i]]--
        }else{
            obj["key"]++
        }
    }
    let sum = 0;
    for( var el in obj ) {
        sum  = sum + obj[el]
    }
    if(sum === 0){
        return true
    }else{
        return false
    }
}

let str1 = ("aabbcc").split("");
let str2 = ("ccbbaa").split("");

console.log(anagram(str1,str2))