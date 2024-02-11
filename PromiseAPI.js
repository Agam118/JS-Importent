// we will work and understand all about promises API 
// ex you want to settled many api parallely then these are used 

const p1 = new Promise( 
      
    function ( resolve , reject )
    {
       
        setTimeout( function (){    
          resolve(" p1 is resolved ") ; 
        } , 3000) ; 
    }
 )

 const p2 = new Promise( 
      
    function ( resolve , reject )
    {
       
        setTimeout( function (){    
          resolve(" p2 is resolved ") ; 
        } , 2000) ; 
    }
 )

 const p3 = new Promise( 
      
    function ( resolve , reject )
    {
       
        setTimeout( function (){    
          reject(" p3 is resolved ") ; 
        } , 1000) ; 
    }
 )

// it will stop batch process if any time a error occur if not then it will until batch process is completed 
Promise.all([p1,p2,p3]).then(
    
      (res) =>{
          
         console.log(res) ;  
      }
) ; 

// it will not stopped the batch process until every one is settled does not matter if error or not 
Promise.allSettled([p1,p2,p3]).then(
    
    (res) =>{
        
       console.log(res) ;  
    }
) ;

// the one who settled and resolved  first will be the output if error then error will be shown 
Promise.race([p1,p2,p3]).then(
    
    (res) =>{
        
       console.log(res) ;  
    }
) ;


// the one who first get settled and resolved will be shown if error come then it will go for next to get settled and resolved 
Promise.any([p1,p2,p3]).then(
    
    (res) =>{
        
       console.log(res) ;  
    }
) ;



