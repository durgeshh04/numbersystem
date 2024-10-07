const numbers = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30];

let primeArray = [];

for(let no = 0; no < numbers.length; no++){
    let factors = 0;

    for(let i = 1; i < numbers.length; i++){
        if(numbers[no] % i == 0){
            factors++;
        }
    }

    if(factors == 2){
        primeArray.push(numbers[no]);
    }
} 

console.log(primeArray);

let max = primeArray[0];
let min = primeArray[0];

for(let i = 0; i < primeArray.length; i++){
    if(max < primeArray[i]){
        max = primeArray[i];
    }

    if(min > primeArray[i]){
        min = primeArray[i];
    }
}

console.log(max);
console.log(min);