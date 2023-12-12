// Here is the solution for third task
module.exports = (string) => {
    // created a new object from object.prototype
    let countObj = Object.create(Object.prototype);
    //  removed white space
    let newString = string.replace(/\s/g, "")
    for(const char of newString ) {
        let count =  countObj[char] || 0;
        countObj[char] = count + 1;
    }

    return countObj;
}