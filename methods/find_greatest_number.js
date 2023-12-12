// Here is the sultion to the first problem
module.exports = (X, Y, Z) => {
    let greatestNum;
    if (X > Y && X > Z) {
        greatestNum = X;
    } else if (Y > X && Y > Z) {
        greatestNum = Y;
    } else {
        greatestNum = Z;
    }

    //<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>
    // here the another using math.max method

    // greatestNum = Math.max(X, Y, Z);
    return greatestNum;
}