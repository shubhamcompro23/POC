
// You have an sorted array (of integers), and a target number as input.
// Write a function in javascript to find the first and the last occurrence of the target number in the given array.
// If target number is not present in the array, return [-1, -1].

// Constraints:
//   1. time complexity: O(log(n))
//   2. space complexity: O(n)

// Examples:
//   Input: nums = [1,3,3,4,4,6], target = 4
//   Output: [3,4]

//   Input: nums = [1,3,3,4,4,6], target = 2
//   Output: [-1,-1]

// function firstAndLast(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
//     let start = -1;
//     let end = -1;
    
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
//       if (nums[mid] === target) {
//         start = mid;
//         end = mid;
//         while (start > 0 && nums[start - 1] === target) {
//           start--;
//         }
//         while (end < nums.length - 1 && nums[end + 1] === target) {
//           end++;
//         }
//         break;
//       } else if (nums[mid] > target) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     }
    
//     return [start, end];
//   }
  
//   console.log(firstAndLast( [1,2,3,4,5,6,6,6,7,8,8,9],6))


function find(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let first = -1;
  let last = -1;

  // Find the first occurrence of the target
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid - 1;
      if (nums[mid] === target) {
        first = mid;
      }
    } else {
      left = mid + 1;
    }
  }

  // Find the last occurrence of the target
  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
      if (nums[mid] === target) {
        last = mid;
      }
    } else {
      right = mid - 1;
    }
  }

  return [first, last];
}

console.log(find([1,1,1,1,1,2,3,4,5,5,5,5,6,8,9,10],55))