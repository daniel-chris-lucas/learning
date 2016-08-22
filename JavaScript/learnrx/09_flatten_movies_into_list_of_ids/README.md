## Flatten the movieLists array into an array of video ids

Let's start by using two nested forEach loops to collect the id of every video in the two-dimensional movieLists array.

Flattening trees with nested forEach expressions is easy because we can explicitly add items to the array. Unfortunately it's exactly this type of low-level operation that we've been trying to abstract away with functions like map() and filter(). Can we define a function that's abstract enough to express our intent to flatten a tree, without specifying too much information about how to carry out the operation?