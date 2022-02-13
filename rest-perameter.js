function calculation(a, b, ...numbers){
    let sum = 0;
    for(let i of numbers){
        sum = sum + i;
    }
    console.log(sum);
}

calculation(5,10,20,30,40,50);
