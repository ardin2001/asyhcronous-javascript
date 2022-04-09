async function callback (){
    const value =4;
    const data = await value;
    console.log(data)
}
console.log(1);
console.log(callback());
console.log(3);