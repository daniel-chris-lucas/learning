Array.prototype.concatAll = function() {
    var results = [];
    this.forEach(function(subArray) {
        // ------------ INSERT CODE HERE! ----------------------------
        // Add all the items in each subArray to the results array.
        // ------------ INSERT CODE HERE! ----------------------------
        results.push.apply(results, subArray);
    });

    return results;
};

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
    return this.
        map(function(item) {
            // ------------   INSERT CODE HERE!  ----------------------------
            // Apply the projection function to each item. The projection
            // function will return a new child array. This will create a
            // two-dimensional array.
            // ------------   INSERT CODE HERE!  ----------------------------
            return projectionFunctionThatReturnsArray(item);
        }).
        // apply the concatAll function to flatten the two-dimensional array
        concatAll();
};

var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
var allWords = [0,1,2].
        concatMap(function(index) {
            return spanishFrenchEnglishWords[index];
        });

console.log(allWords);

/*
    var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
    // collect all the words for each number, in every language, in a single, flat list
    var allWords = [0,1,2].
        concatMap(function(index) {
            return spanishFrenchEnglishWords[index];
        });

    return JSON.stringify(allWords) === '["cero","rien","zero","uno","un","one","dos","deux","two"]';
*/