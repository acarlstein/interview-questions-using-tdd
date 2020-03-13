# Over Simplified Standard Library

## Set

I created a primite Set. The reason I called primitive is that it uses an Array as a container instead of a HashMap which would be more efficience.

TypeScript/JavaScript doesn't have the same kind of HashMap that Java has; therefore, I will have to create one

### TODO

* In the Hashmap, implement Synchonization
* Create a HashMap class
* In Set class, replace the array container with a HashMap
* Create a universal object where the hashCode method can be use by all objects
  * May attach method as a prototype to TypeScript objects such as String, Boolean, etc.

## Stack

Using TDD, create a basic Stack in which we can  push a value, pop a value, peek the top of the stack, check if the stack is empty and check how many elements are in the stack.

## Linked List

In order to build an effective Hashtable and a Hashmap, I need a Linked List.
In that way later, I can built an effective Set by using such Hashmap

# Hashtable

Using TDD, we need to create a generic Hashtable that can put or get an object.

I am planning to use this hash formula to obtain a hash number:
`s.charCodeAt(0) * 31n-1 + s.charCodeAt(1) * 31n-2 + ... + s.charCodeAt(n-1)`

The idea is that if I can obtain a string from a number, string or object provided as a key,
I can obtain a string that can be used as a seed to create this hash number..

When I do the operations such as put, this hash value will be modified based on the side of the container array.
This means that is I decide to resize the array, I must make sure to rehash all the hash values.

~~I will have to create a linked list or use an dynamic array to deal with the collisions.~~
I created an oversimplified version of a linked list to use in this Hashtable. I will perform the code changes to apply it.

# HashMap