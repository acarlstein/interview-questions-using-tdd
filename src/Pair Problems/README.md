# Pair Problems

The title is self explanatory. We want to write an algorithm 
that will allows us to find out how many pairs do we have.
For example, how many pairs of socks (or shoes), of the same color, do we have?

We will be provided with an input, which normally is a numeric array.
In this numeric array, each element will correspond to an item, and 
the number of the element indicates the color.

For example, `arr = [1, 1]` represent two socks and the number 1 represent a color such as red.

## Sock Problem

* Level: Novice 

We are asked to find the pair of socks of large pile.
We are provided with an array of 7 elements: `arr = [1, 2, 1, 2, 1, 2, 3]` and `n=7`
Each number represents a color such as 1 is red, 2 is blue, etc.
The socks are being pair by color.

## Pre-Analysis Summary

For this particular problem, I decided to use a HashSet. Below is the explanation of why.

## Pre-Analysis

The purpose of this analysis is to come up with ideas that can help us to solve this kind of problem.
To do that, I will go over the common data structures that we could use to solve it.

### Array, Stack, Queue, Linked List

We could use an array, in which we pick the first element and iterate the array until finding a pair.
Then, increase the counter, perhaps override one of the pairs (so we don't get confused), and repeat.
The issue with this approach is that it would perform as a bubble sort with O(n^2).

Applying Stack, Queue, and Linked List (Single, Double, Circular, or LinkedHashMap) may end with the same results.
Therefore, we are not going to use them

### Trees

We could try to use a Tree (Binary, AVL, Red-Black, Trie, etc) but the imprementation would be overcomplicated.
Some assumptions would need to be made and still, I don't think it would give us the results we want.

### Hash

From the hash family (HashMap, HashTable, LinkedHashMap, and HashSet), I would say that our winner is the HashSet.
There are two reasons:

* The first reason is that a HashSet only allows unique elements into its set.
* The second reason is that accessing such element could take O(1) 

Therefore, to solve this peculiar problem, I am going to implement a HashSet.

