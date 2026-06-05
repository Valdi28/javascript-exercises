const fibonacci = function(position) {
    if (position < 0) {
        return "OOPS"
    }

    const fibonacci = [0, 1, 1]
    for (let i = 2; i < position; i++) {
        fibonacci.push(fibonacci[i]+fibonacci[i-1]);
    }

    return fibonacci[position]
};

console.log(fibonacci(40));

// Do not edit below this line
module.exports = fibonacci;
