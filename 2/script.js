function coba2(){
    const dataAsync = new Promise((resolve,reject) => {
        const waktu = 4000;
        if (waktu < 5000){
            resolve('api is success');
        }else{
            reject('api is overload');
        }
    });
};

async function callback (){
    const test = await coba2();
    console.log(`ini callback bos ${test}`)
}
console.log(callback);

const dataAsync = new Promise((resolve,reject) => {
    const waktu = 4000;
    if (waktu < 5000){
        setTimeout(() => resolve('api is success'),3000);
    }else{
        setTimeout(() => reject('api is overload'),3000);
    }
});
console.log('=============')
console.log(dataAsync);

dataAsync.then(data => console.log(data));
console.log('test async');