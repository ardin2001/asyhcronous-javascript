function TestPromise(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => resolve('api is success'),3000);
        setTimeout(() => reject('api is overload'),3000);
    });
}

async function CallAsync(){
    const data2 = 4;
    const data = await data2;
    console.log(data);
}
console.log('start');
CallAsync();
console.log('finish');