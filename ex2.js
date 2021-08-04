const R = require('ramda');

function isEven(number) {
    const n = R.clone(number);
    let even = n % 2 == 0;
    return even;
}

function positive(number) {
    const n = R.clone(number);
    let positive = n > 0;
    return positive;
}

function isOdd(number) {
    const n = R.clone(number);
    let odd = n % 2 != 0;
    return odd;
}

function negative(number) {
    const n = R.clone(number);
    let negative = n > 0;
    return negative;
}

function isZero(number) {
    const n = R.clone(number);
    let zero = n == 0;
    return n;
}

function isPrime(number, divisor) {
    const n = R.clone(number);

    if (n <= 2)  
        return (n == 2) ? true : false;

    if (n % divisor == 0)
        return false;
    if (divisor * divisor > n)
        return true;

    return isPrime(n, divisor + 1);
}

function mapToNumberObject(num) {
    return { value: num };
}

const arr = [-1, 50, 5, 10, -8, 20, 25, 0, 100, 14, -123];

const arrObjects = arr.map(mapToNumberObject);

console.log(isPrime(2));

// ExercÃ­cio 1: use map() para transformar 'arr' em objetos usando mapToNumberObject()

// ExercÃ­cio 2: seguindo o modelo das 2 primeiras funÃ§Ãµes implemente as outras 4 funÃ§Ãµes

// ExercÃ­cio 3: refatore todas as funÃ§Ãµes para a forma usando arrow function (=>)

// ExercÃ­cio 4: use R.pipe para compor as funÃ§Ãµes: isEven, positive, isOdd, negative, 
    // isZero, e isPrime. Teste a funÃ§Ã£o composta com um Ãºnico objeto.

// ExercÃ­cio 5: use a funÃ§Ã£o composta do Ex. 4 para transformar os nÃºmeros em 'arr'