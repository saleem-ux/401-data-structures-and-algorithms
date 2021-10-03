"use strict";

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    //i will use insert//add to the first so if i had collison new value will added to the head , old to the next 
    //if i used append , in collision new value will add to next , old still in head  
    //     insert(value) {
    //       const node = new Node(value);
    //       if (!this.head) {
    //         this.head = node;
    //       } else {
    //         node.next = this.head;
    //         this.head = node;
    //       }
    //     }
    //  }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
}

class Hashmap {
    constructor(size) {
        this.size = size;
        this.storage = new Array(size);
    }
    //key = name ==> 400


    hash(key) {
        // hashing algorithm
        return key.split('').reduce((acc, char) => {
            console.log("char.charCodeAt(0) =====> ", char.charCodeAt(0))
            return acc + char.charCodeAt(0);
        }, 0) * 599 % this.size;
        // return the value of the hashed key
    }

    add(key, value) {
        // get an index//we have a key lets do hash 
        const hash = this.hash(key);
        console.log("Key", hash);//key=951 //[951]
        //we need to store this key in our map (array)
        // set key in hashmap to have this value
        //in this location ===> this.storage[hash] = store data  -> if there's a linked list add to it.if we dont have
        //linked list create one and add to it . 
        // [0,1,2,3,4,45,6.. .. size]
        // we need to check if a value already exist in the index
        //if there is nothing in this location //create new linked list and  add to it 
        if (!this.storage[hash]) {

            const ll = new LinkedList();
            ll.append({ [key]: value });//store key and value /  //-> {name: dunia}

            this.storage[hash] = ll; // [951] = {head:node{value:{"key","value"},next:null}}//{head:node{value:{"name","dunia"}
            console.log('storage=================>', this.storage[hash]);
            console.log('linkedlist===============>', ll);

        } else {
            console.log('collision happened');
            this.storage[hash].append({ [key]: value });
            console.log(this.storage[hash].append({ [key]: value }));
        }
    }
    //Returns: Value associated with that key in the table
    get(key) {
        const hash = this.hash(key);
        console.log('keeeeeey', hash);
        if (this.storage[hash]) {
            console.log('1==========>', this.storage[hash]);
            let currentNode = this.storage[hash].head;

            console.log('2==========>', currentNode);
            while (currentNode) {
                console.log('inside while');
                if (currentNode.value[key]) {
                    console.log(currentNode.value[key])
                    return currentNode.value[key];
                    ;
                }
                currentNode = currentNode.next;
                console.log('currentNode=======>', currentNode);
            }
        } else {
            return null;
        }
    }


    //Returns: Boolean, indicating if the key exists in the table already.

    contains(key) {
        const hash = this.hash(key);
        if (this.storage[hash]) {
            let currentNode = this.storage[hash].head;
            while (currentNode) {
                if (currentNode.value[key]) {
                    return true;
                }
                currentNode = currentNode.next;
            }
        } else {
            return false;
        }
    }
}




const hashmap = new Hashmap(1024);
hashmap.add('name', 'dunia');//951//result of hash key (name)
hashmap.add('age', 23);//75//result of hash key (age)
hashmap.add('cat', 'masha');//520//result of hash key (cat)
hashmap.add('act', 'Jonny Depp');//520, collision 
hashmap.add('tac', 'tac..tac');//520, collision 





console.log(hashmap)
console.log(hashmap.storage[951]);
console.log(hashmap.storage[75]);
console.log(hashmap.storage[520]);
console.log('next=====>', hashmap.storage[520].head.next);
console.log('next2=====>', hashmap.storage[520].head.next.next);
console.log('get============>', hashmap.get('name'));
console.log('get============>', hashmap.get('cat'));
console.log('get============>', hashmap.get('act'));
console.log('contains ?============>', hashmap.contains('name'));
console.log('contains ?============>', hashmap.contains('act'));
console.log('contains ?============>', hashmap.contains('tac'));
console.log('contains ?============>', hashmap.contains('test'));
;


module.exports = Hashmap;