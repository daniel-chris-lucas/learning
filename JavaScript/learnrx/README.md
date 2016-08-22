## Functional Programming in JavaScript

[http://reactivex.io/learnrx](http://reactivex.io/learnrx)

### 01. Traversing an Array

Print all the names in an array using a for loop.

### 02. Use forEach to print all the names in an array

Repeat previous exercise using the forEach function.

### 03. Project an array of videos into an array of {id,title} pairs using forEach()

For each video, add a projected {id, title} pair to the videoAndTitlePairs array.

### 04. Implement map()

To make projections easier, let's add a map() function to the Array type. Map accepts the projection function to be applied to each item in the source array, and returns the projected array.

### 05. Use map() to project an array of videos into an array of {id,title} pairs

Let's repeat the exercise of collecting {id, title} pairs for each video in the newReleases array, but this time we'll use our map function.

### 06. Use forEach() to collect only those videos with a rating of 5.0

Use forEach() to loop through the videos in the newReleases array and, if a video has a rating of 5.0, add it to the videos array.

### 07. Implement filter()

To make filtering easier, let's add a filter() function to the Array type. The filter() function accepts a predicate. A predicate is a function that accepts an item in the array, and returns a boolean indicating whether the item should be retained in the new array.

### 08. Query Data by Chaining Method Calls

Chain filter and map to collect the ids of videos that have a rating of 5.0

### 09. Flatten the movieLists array into an array of video ids

Let's start by using two nested forEach loops to collect the id of every video in the two-dimensional movieLists array.

### 10. Implement concatAll()

Let's add a concatAll() function to the Array type. The concatAll() function iterates over each sub-array in the array and collects the results in a new, flat array.

### 11. Use map() and concatAll() to project and flatten the movieLists into an array of video ids

Use two nested calls to map() and one call to concatAll().

Mastering the combination of map() and concatAll() is key to effective functional programming

### 12. Retrieve id, title, and a 150x200 box art url for every video

Create a query that selects {id, title, boxart} for every video in the movieLists. This time though, the boxart property in the result will be the url of the boxart object with dimensions of 150x200px. Solve this problem with map(), concatAll(), and filter().

### 13. Implement concatMap()

Nearly every time we flatten a tree we chain map() and concatAll(). Sometimes, if we're dealing with a tree several levels deep, we'll repeat this combination many times in our code. To save on typing, let's create a concatMap function that's just a map operation, followed by a concatAll.

### 14. Use concatMap() to retrieve id, title, and 150x200 box art url for every video

Let's repeat the exercise we just performed. However this time we'll simplify the code by replacing the map().concatAll() calls with concatMap().