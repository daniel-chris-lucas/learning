Array.prototype.concatAll = function() {
    var results = [];
    this.forEach(function(subArray) {
        results.push.apply(results, subArray);
    });

    return results;
};

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
    return this.
        map(function(item) {
            return projectionFunctionThatReturnsArray(item);
        }).concatAll();
};

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

Array.zip = function(left, right, combinerFunction) {
    var counter,
        results = [];

    for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
        results.push(combinerFunction(left[counter], right[counter]));
    }

    return results;
};

function converter() {
    var lists = [
        {
            "id": 5434364,
            "name": "New Releases"
        },
        {
            "id": 65456475,
            "name": "Thrillers"
        }
    ],
    videos = [
        {
            "listId": 5434364,
            "id": 65432445,
            "title": "The Chamber"
        },
        {
            "listId": 5434364,
            "id": 675465,
            "title": "Fracture"
        },
        {
            "listId": 65456475,
            "id": 70111470,
            "title": "Die Hard"
        },
        {
            "listId": 65456475,
            "id": 654356453,
            "title": "Bad Boys"
        }
    ];

    return lists.map(function (list) {
        return {name: list.name, videos: videos.filter(function (video) {
            return video.listId === list.id;
        }).map(function (video) {
            return {id: video.id, title: video.title};
        })};
    });
}

console.log(JSON.stringify(converter()));