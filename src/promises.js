console.log("Bismillah"); 

let successPromise = new Promise((resolve,reject)=> {
    resolve('success');  

}); 

let successPromise2 = new Promise((resolve,reject)=> {
    resolve('success 2');  

}); 

let errorPromise = new Promise((resolve,reject)=> {
    reject('error');  

}); 


let errorPromise2 = new Promise((resolve,reject)=> {
    reject('error 2');  

}); 


successPromise.then((res)=>{
    console.log(res); 
}).catch((err)=>{
console.log(err); 
});


errorPromise.then((res)=>{
    console.log(res); 
}).catch((err)=>{
console.log(err); 
});

Promise.all([successPromise,successPromise2]).then((data)=>{
console.log(data); 
})

Promise.all([errorPromise,errorPromise2]).catch((err)=>{
    console.log(err); 
    })

    let func = fetch("http://api.icndb.com/jokes").then((res)=>{
        return res.json(); 
    }); 

    func
    .then((jsonres)=>{
        console.log(JSON.stringify(jsonres)); 

    })
