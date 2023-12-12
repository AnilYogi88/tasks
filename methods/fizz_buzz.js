// Here is the solution to the second question
module.exports = () => {
    let fizzBuzzArray = [];
    for(let i=1; i <= 100; i++) {
        let solution = (i % 3 === 0 && i % 5===0) ? "FizzBuzz" : (i%3 ===0) ? "Fizz" : (i % 5 ===0)? "Buzz" : i
        fizzBuzzArray.push(solution);
    }
    return fizzBuzzArray;
}