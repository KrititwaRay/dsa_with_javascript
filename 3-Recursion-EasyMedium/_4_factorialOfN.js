function factorialOfN(n) {
    if (n == 1) return 1

    return n * factorialOfN(n - 1)
}

let result = factorialOfN(5)
console.log(result);