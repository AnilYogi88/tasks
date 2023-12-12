// Here is the solution for fourth task
// solution of the this task is not complete, yet it does the half of the work
module.exports = (num) => {
    let array = [];

    for (let i = 1; i <= num; i++) {
        array.push(i)
    }

    let printLine = (char) => char.repeat(1);

    array.forEach(element => {
        process.stdout.write(printLine(' -') + ' ');
    });
    process.stdout.write('\n');

    array.forEach(element => {
        process.stdout.write(`|${element}|`);
    });
    process.stdout.write('\n');

    array.forEach(element => {
        process.stdout.write(printLine(' -') + ' ');
    });
    process.stdout.write('\n');
}