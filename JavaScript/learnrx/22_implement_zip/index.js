// JSON.stringify(Array.zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]'

Array.zip = function(left, right, combinerFunction) {
    var counter,
        results = [];

    for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
        // Add code here to apply the combinerFunction to the left and right-hand items in the respective arrays
        results.push(combinerFunction(left[counter], right[counter]));
    }

    return results;
};

console.log(Array.zip([1,2,3], [4,5,6], function (left, right) {
    return left + right;
}));