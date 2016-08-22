Array.prototype.reduce = function(combiner, initialValue) {
    var counter,
        accumulatedValue;

    if (this.length === 0) {
        return this;
    } else {
        if (arguments.length === 1) {
            counter = 1;
            accumulatedValue = this[0];
        }
        else if (arguments.length >= 2) {
            counter = 0;
            accumulatedValue = initialValue;
        }
        else {
            throw "Invalid arguments.";
        }

        while(counter < this.length) {
            accumulatedValue = combiner(accumulatedValue, this[counter])
            counter++;
        }

        return [accumulatedValue];
    }
};

function highestRating() {
    var ratings = [2,3,1,4,5];

    // You should return an array containing only the largest rating. Remember that reduce always
    // returns an array with one item.
    return ratings.
        reduce(function (prev, current) {
            return current > prev ? current : prev;
        });
}

console.log(highestRating());