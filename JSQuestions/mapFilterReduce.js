//Implement myMap method in Array prototype Object


let arr = [1,2,3,4,5,6]

Array.prototype.myMap = function (cb) {
  let newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(cb(this[i]))
  }

  return newArray
}

const result = arr.myMap((e)=>{
  return e*e
})

console.log(result)

// General mapMethod 

const array = [1,2,3,4]

function mapMethod(array) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * array[i])
  }
  return result
}

const newArray = mapMethod(array)

console.log(newArray)



//Implement myFilter method in Array prototype Object

let fil = [1,2,3,4,5,6,7]

Array.prototype.myFilter = function(cb) {
  const filterArr = [];
  for(let i = 0; i<this.length; i++) {
      if(cb(this[i])) {
          filterArr.push(this[i])
      }
  }
  return filterArr;
}


const filterArray = fil.myFilter((e)=>{
  if( e%2 === 0){
    return e
  }
})

console.log(filterArray)


// Implement Reduce method in Array prototype object

Array.prototype.myReduce = function(callback, initialVal) {

  let accumulator;
 
  if(initialVal){
      accumulator = initialVal;
  }else{
      accumulator = undefined;
  }
  for (var i = 0; i < this.length; i++) {
      if (accumulator !== undefined){
          accumulator = callback(accumulator, this[i]);
      }
      else{
          accumulator = this[i];
      }
  }
  return accumulator;
};


const arr1 = [20, 20, 2, 3];
const total = arr1.myReduce(function(a, b) {
  return a + b;
},100);
console.log(total);