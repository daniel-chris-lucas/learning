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

### 15. Use forEach to find the largest box art

Use forEach to find the largest box art. Each time we examine a new boxart we update a variable with the currently known maximumSize. If the boxart is smaller than the maximum size, we discard it. If it's larger, we keep track of it. Finally we're left with a single boxart which must necessarily be the largest.

### 16. Implement reduce()

Add a reduce() function to the Array type. Like map. Take note this is different from the reduce in ES5, which returns a value instead of an Array!

### 17. Retrieve the largest rating

Use reduce function to isolate the largest value in an array of ratings

### 18. Retrieve url of the largest boxart

Combine reduce() with map() to reduce multiple boxart objects to a single value: the url of the largest box art.

### 19. Reducing with an initial value

Sometimes when we reduce an array, we want the reduced value to be a different type than the items stored in the array. Let's say we have an array of videos and we want to reduce them to a single map where the key is the video id and the value is the video's title.

### 20. Retrieve the id, title, and smallest box art url for every video

This is a variation of the problem we solved earlier, where we retrieved the url of the boxart with a width of 150px. This time we'll use reduce() instead of filter() to retrieve the smallest box art in the boxarts array

### 21. Combine videos and bookmarks by index

Use a for loop to traverse the videos and bookmarks array at the same time. For each video and bookmark pair, create a {videoId, bookmarkId} pair and add it to the videoIdAndBookmarkIdPairs array