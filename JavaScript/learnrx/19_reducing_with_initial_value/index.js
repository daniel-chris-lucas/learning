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

function reducer() {
    var videos = [
        {
            "id": 65432445,
            "title": "The Chamber"
        },
        {
            "id": 675465,
            "title": "Fracture"
        },
        {
            "id": 70111470,
            "title": "Die Hard"
        },
        {
            "id": 654356453,
            "title": "Bad Boys"
        }
    ];

    // Expecting this output...
    // [
    //   {
    //       "65432445": "The Chamber",
    //       "675465": "Fracture",
    //       "70111470": "Die Hard",
    //       "654356453": "Bad Boys"
    //   }
    // ]
    return videos.
        reduce(function(accumulatedMap, video) {
            var obj = {};

            // ----- INSERT CODE TO ADD THE VIDEO TITLE TO THE ----
            // ----- NEW MAP USING THE VIDEO ID AS THE KEY   ----
            obj[video.id] = video.title;

            // Object.assign() takes all of the enumerable properties from
            // the object listed in its second argument (obj) and assigns them
            // to the object listed in its first argument (accumulatedMap).
            return Object.assign(accumulatedMap, obj);
        },
            // Use an empty map as the initial value instead of the first item in
            // the list.
        {});
}

console.log(JSON.stringify(reducer()));