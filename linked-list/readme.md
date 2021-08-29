# Code Challenge: Class 04 / linked-list 

# Challenge Description

* ## Node
#### Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

* ## Linked List
### Create a Linked List class
* ### insert : Adds a new node with that value to the head of the list with an O(1) Time performance.

* ### include : checks if a value in the list exist

* ### toString : returns all the nodes in a list in a String format.


* ## add tests to the code to test for the following:
### 1. Can successfully instantiate an empty linked list
### 2. Can properly insert into the linked list
### 3. The head property will properly point to the first node in the linked list
### 4. Can properly insert multiple nodes into the linked list
### 5. Will return true when finding a value within the linked list that exists
### 6. Will return false when searching for a value in the linked list that does not exist
### 7. Can properly return a collection of all the values that exist in the linked list









## Approach & Efficiency :

* ###  understood the problem first
* ### I imagined how the results should be
* ### I made a drawings of how the linked list would be after insertion of multiple nodes Linked-List.
* ### I wrote the code
* ### I made the tests

## API
* ### Insert(): which takes value of type any adding new node with the input value to the list.

* ### include(): this method compare input value if it's exist in linked list.

* ### toString(): return a string visiulizing the linked list shape.

## How to Use
* ### To create an empty linked list : const = new LinkedList();
* ### To insert a Node at the start of the linked list : .insert()
* ### To check for values : .include() , it will return true if the value exist, otherwise it will return false.
* ### output all of the values of the linked list : .toString()

## The Code :
### [Code](https://github.com/saleem-ux/401-data-structures-and-algorithms/tree/main/code-challenge05)

## Test
### npm run test 