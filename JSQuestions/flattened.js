function flatten(arr, n) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const elem = arr[i];
      if (Array.isArray(elem) && n > 0) {
        result.push(...flatten(elem, n - 1));
      } else {
        result.push(elem);
      }
    }
    return result;
  }
  
  console.log(flatten([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, [14], 15]],1))