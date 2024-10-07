const numbers = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30];

let primeArray = [];
let sum = 0;


for(let no = 0; no < numbers.length; no++){
    let factors = 0;


    for(let i = 1; i <= numbers[no]; i++){
        if(numbers[no] % i === 0){
            factors++;
        }
    }

    if(factors === 2){
        sum += numbers[no];  // Add to sum
        primeArray.push(numbers[no]);  // Add to primeArray
    }
} 

console.log("Sum of primes:", sum);
console.log("Prime numbers:", primeArray);

if (primeArray.length > 0) {

    let max = primeArray[0];
    let min = primeArray[0];

    // Find max and min from primeArray
    for(let i = 1; i < primeArray.length; i++){
        if(max < primeArray[i]){
            max = primeArray[i];
        }

        if(min > primeArray[i]){
            min = primeArray[i];
        }
    }

    console.log("Max prime:", max);
    console.log("Min prime:", min);
} else {
    console.log("No prime numbers found.");
}
