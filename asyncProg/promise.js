function getOrderDetail(id) {

    console.log('Processing ID', id);
    
      return new Promise((resolve, reject) => {
          resolve('Order details');
      })
  }
  
  function getIngriedents(od) {
  
    console.log('Processing OD',od);
    
      return new Promise((resolve, reject) => {
          resolve('Ingriedents details');
      })
  }
  
  function cookFood(ingre, cb) {
  
    console.log('Processing Ingre', ingre);
    
      return new Promise((resolve, reject) => {
          resolve('Food');
      })
  }
  
  function serveFood(food) {
    console.log('Food', food);
  }

  // CallBack Hell
// const orderFullfill = (id,getOrderDetail)=>{
//     getOrderDetail(id,(orderDetails)=>{
//         getIngriedents(orderDetails,(ingriedents)=>{
//             cookFood(ingriedents,(food)=>{
//                 serveFood(food)
//             })
//         })
//     })
// }


// promise 
  
  const orderFullfillment = (id) => {
      getOrderDetail(id)
      .then((orderDetails)=> getIngriedents(orderDetails))
      .then((ingriedents)=> cookFood(ingriedents))
      .then((food)=> serveFood(food))
    }
  
  
  orderFullfillment(1);