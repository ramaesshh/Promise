
/*
const year = parseInt(prompt("Enter your age:"))
const age = new Promise((resolve,reject)=>{
    if(year>=18){
        resolve("Elegible for vote")
    }
    else{
        reject("Not elegible for vote")
    }
})
age.then((data)=>console.log(data)).catch((error)=>console.log(error))
*/


//!when it has both resolve and reject in promise it executes in the order like the first one will execute no matter its resolve or reject
/*
function foo(num){
    return new Promise((resolve,reject) =>{
       resolve("this is resolved"+" "+num);
       reject("this is rejected"+" "+num)
    })
}
foo(20).then((data)=>console.log(data)).catch((error)=>console.log(error))
*/

//! Promise chaining  >>>(depandant operation) The result of the first promise is the input of the second promise .... it goes on

/*
function mul(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(num*2),2000)
    })
}
mul(10).then((data)=>{
    console.log(data)
    return mul(data)
}).then((data1)=>{
    console.log(data1)
    return mul(data1)
}).then((data2)=>{
    console.log(data2)
    return mul(data2)
}).then((data3)=>console.log(data3)).catch((error)=>console.log(error))
*/

//! Promise.all()             >>>if one is rejected it stops their and return the rejected one if not it return all the output in array
                               //! returns as array of object
/*
const p1 = new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>resolve("p1 is resolved"),2000)    
    }
    else{
        setTimeout(()=>reject("p1 is rejected"),2000)
    }
})
const p2 = new Promise((resolve,reject)=>{
    if(false){
        setTimeout(()=>resolve("p2 is resolved"),2000)    
    }
    else{
        setTimeout(()=>reject("p2 is rejected"),2000)
    }
})
const p3 = new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>resolve("p3 is resolved"),2000)    
    }
    else{
        setTimeout(()=>reject("p3 is rejected"),2000)
    }
})
Promise.all([p1,p2,p3]).then((data)=>console.log(data)).catch((error)=>console.log(error))
*/

//! Promise.allSettled()                >>>it is used to display all the elements >>> output will be promise object


const p1 = new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>resolve("p1 is resolved"),2000)    
    }
    else{
        setTimeout(()=>reject("p1 is rejected"),2000)
    }
})
const p2 = new Promise((resolve,reject)=>{
    if(false){
        setTimeout(()=>resolve("p2 is resolved"),2000)    
    }
    else{
        setTimeout(()=>reject("p2 is rejected"),2000)
    }
})
const p3 = new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>resolve("p3 is resolved"),2000)    
    }
    else{
        setTimeout(()=>reject("p3 is rejected"),2000)
    }
})
const res = Promise.allSettled([p1,p2,p3]).then((data)=>data.forEach((res)=>console.log(res)))
