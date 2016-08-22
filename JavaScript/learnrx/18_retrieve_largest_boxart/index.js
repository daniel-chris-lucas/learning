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

function largestBoxart() {
    var boxarts = [
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
            { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
            { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
        ];

    // You should return an array containing only the URL of the largest box art. Remember that reduce always
    // returns an array with one item.
    return boxarts.
        reduce(function (prev, current) {
            return current.width * current.height > prev.width * prev.height
                ? current
                : prev
        }).map(function (boxart) {
            return boxart.url;
        });
}

console.log(largestBoxart());