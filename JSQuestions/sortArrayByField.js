// Question :
// You have an array of similar objects (structurally) and a string (field_name) as input.
// Write a function that returns the (original) array which is sorted on the given field.

// For example:

// Example 1:
// Input: [{a: 4, b: "abc"}, {a: 6, b: "pqr"}, {a: 2, b: "xyz"}, {a: 8, b: "def"}],  "a"
// Output: [{a: 2, b: "xyz"}, {a: 4, b: "abc"}, {a: 6, b: "pqr"}, {a: 8, b: "def"}]

// Example 2:
// Input: [{a: 4, b: "abc"}, {a: 6, b: "pqr"}, {a: 2, b: "xyz"}, {a: 8, b: "def"}], "b"
// Output: [{a: 4, b: "abc"}, {a: 8, b: "def"}, {a: 6, b: "pqr"}, {a: 2, b: "xyz"}]


function sortByField(array, field_name) {
    if (array.length <= 1) {
      return array;
    }
  
    const midpoint = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, midpoint);
    const rightHalf = array.slice(midpoint);
  
    const sortedLeftHalf = sortByField(leftHalf, field_name);
    const sortedRightHalf = sortByField(rightHalf, field_name);
  
    return merge(sortedLeftHalf, sortedRightHalf, field_name);
}
  
function merge(leftHalf, rightHalf, field_name) {
    const mergedArray = [];
  
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
      if (leftHalf[leftIndex][field_name] <= rightHalf[rightIndex][field_name]) {
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
  
  
console.log(sortByField( [{a: 4, b: "abc"}, {a: 6, b: "pqr"}, {a: 2, b: "xyz"}, {a: 8, b: "def"}],  "b"))
  