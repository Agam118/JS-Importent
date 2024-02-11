// We will create our own promise and we will see how good api's makes a promise 

const cart = ["T-shirt","Shirt","Kurta","Jackets"] ; 

// createCart is api which returns us the id of the cart itmes for payments 
const promise =  CreateCart(cart) ; 

promise.then( function(orderId){
    
     console.log(orderId) ; 
     
}).catch((err)=>{
     
     console.log(err.message) ; 
})

console.log("Before Promise is resolve") ; 

function CreateCart(cart)
{
     const pr = new Promise(

      // resolve and reject are function which are define inside Promise class 
     
      function( reject , resolve ){
          
          // validate the customer 
          // request dbs 
          // dbs will send your resonpose 

          if(!validate())
          {
             const err = new Error("Cart is not valid") ; 
             reject(err) ; 
          }
          
          const orderid = 12345 ; 

          setTimeout( function (){
               
            resolve(orderid) ; 
            
          },5000) ; 
           
      }

     ) ; 

     return pr ; 
}

function validate()
{
   return false ; 
}

console.log("After Promise is resolve") ; 