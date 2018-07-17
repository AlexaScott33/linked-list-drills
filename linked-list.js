'use strict';

// Create a Linked list class

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;

      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  // method 1
  insertAfter(key, itemToInsert) {
    if (this.head === null) {
      return;
    }

    // if (this.head.value === key) {
    //   this.head.next = new _Node(itemToInsert);
    //   return;
    // }

    let currNode = this.head;
    //let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== key)) {
      //prevNode = currNode;
      currNode = currNode.next;
    }
    // console.log('LOOOK', currNode);
    currNode.next = new _Node(itemToInsert, currNode.next);
  }

  // method 2
  //   insertAfter(key, itemToInsert){
  //     let tempNode = this.head;
  //     while(tempNode !== null && tempNode.value !== key){
  //         tempNode = tempNode.next;
  //     } 

  //     console.log('LOOOOK', tempNode)
  // ;    if(tempNode !== null){
  //         tempNode.next = new _Node(itemToInsert, tempNode.next);
  //     }  
  // }

  insertBefore(key, itemToInsert) {
    if (this.head === null) {
      return;
    }

    if (this.head.value === key) {
      this.insertFirst(itemToInsert);
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== key)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Node not found to insert');
      return;
    }
    prevNode.next = new _Node(itemToInsert, currNode);
  }

  insertAt(nthPosition, itemToInsert) {
    if (nthPosition < 0) {
      throw new Error('Position error - no negative numbers');
    }
    if (nthPosition === 0) {
      this.insertFirst(itemToInsert);
    } else {
      // Find the node which we want to insert after

      const node = this._findNthElement(nthPosition - 1);
      const newNode = new _Node(itemToInsert, null);
      newNode.next = node.next; 
      node.next = newNode;
    }
  }

  _findNthElement(position) {
    let node = this.head;

    for (let i = 0; i < position; i++) {
      console.log(`i: ${i}, position: ${position}, node: ${node.value}`);
      node = node.next;
    }
    console.log('found the positions value!', node.value);
    return node;
  }

  find(item) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    prevNode.next = currNode.next;
  }
}

function displayList(list) {
  let currNode = list.head;

  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function size(list) {
  let counter = 0;

  let currNode = list.head;
  
  while (currNode !== null) {
    counter++;
    currNode = currNode.next;
  }
  console.log(`The size of the list is: ${counter}`);
  return counter;
}

// function size(lst){
//     let counter = 0;
//     let currNode = lst.head;
//     if(!currNode){
//         return counter;
//     }
//     else
//         counter++;
//     while (!(currNode.next == null)) {
//         counter++;
//         currNode = currNode.next;
//     }
//     return counter;
// }

function isEmpty(list) {
  let currNode = list.head;

  if (!currNode) {
    console.log('The list is empty');
    return true;
  } else {
    console.log('The list is not empty');
    return false;
  }
}

function findPrev(list, item) {
  // console.log('list.head ====', list.head.value);
  //   if(item === list.head.value) {
  //     console.log(`${item} is the first in the list`);
  //     return;
  //   }
  let currNode = list.head;
  // getting null for currNode.next.value when item === list.head.value
  // console.log('!!!!!!!', currNode.next.value);
  while ((currNode !== null) && (currNode.next.value !== item)) {
    currNode = currNode.next;
  }
  console.log(`The previous node before ${item} is ${currNode.value}`);
  return currNode; 
}

function findLast(list) {
  if (list.head === null) {
    console.log('The list is empty');
    return;
  }

  let currNode = list.head;

  while (currNode.next !== null) {
    currNode = currNode.next;
  }

  console.log(`The last item in the list is ${currNode.value}`);
  return currNode;
}

//Answer: This program removes duplicates from a linked list. It will remove the 2nd and 
//later occurances of the linked list - will not presenve the order of the list
function WhatDoesThisProgramDo(lst){
  let current = lst.head;
  while(current !== null){
    // console.log('hitting first while loop');
    let newNode = current;
    while (newNode.next !== null) {
      // console.log('hitting second while loop');
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else{
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

//**************** NON RECURSIVE SOLUTION ***********
// O(n)
function reverse(list) {
  // slowly create the list by adding to reversedPart
  let reversedPart = null;
  let current = list.head;
   
  while(current !== null) {
    // assign the next node to savedNode for safe keeping
    let savedNode = current.next;
    // Reassigns current's pointer to the new list we are making
    // reversedPart starts as null, but slowly grows as things are
    // pushed onto the new list
    current.next = reversedPart;
    reversedPart = current;
    // update the counter that is traveling through the array
    current = savedNode;
  }
  // update the head so we have access to the linked list
  list.head = reversedPart;
  console.log(list.head);
  //displayList(lst);
  return list;
}

/************** A recursive version of the reverseList *********/
//O(n)
//send the head of the list - if you follow the next pointer of the head,
//you get to see the whole list. You don't have to send the whole list
function  reverseList(node) {
  //what if 0 node in list
  if (node == null) {
    return null;
  }
  //what if 1 node in list
  if (node.next == null) {
    return node;
  }
  //reverse recursively and link second.next to first 
  const secondElem = node.next;
  node.next = null;
  const reverseRest = reverseList(secondElem);
  secondElem.next = node;
  return reverseRest;
}

function thirdFromEnd(list) {
  let thirdEnd = list.head;
  let end = thirdEnd.next.next.next;

  while (end !== null) {
    thirdEnd = thirdEnd.next;
    end = end.next;
  }

  console.log(`The third element from the end is ${thirdEnd.value}`);
  return thirdEnd;
}


let SLL = new LinkedList();

function main() {
  SLL.insertFirst('Apple');
  SLL.insertLast('Banana');
  SLL.insertLast('Strawberry');
  SLL.insertLast('Blueberry');
  SLL.insertBefore('Apple', 'Orange');
  SLL.insertBefore('Strawberry', 'Blackberry');
  //SLL.insertAfter('Banana', 'Kiwi');
  SLL.insertAfter('Orange', 'Kiwi2');
  // SLL.remove('Apple');
  //   console.log(SLL.find('Strawberry'));
  // console.log(JSON.stringify(SLL, null, 2));
  return SLL;
}

main();

//displayList(SLL);

// size(SLL);
// isEmpty(SLL);

// findPrev(SLL, 'Orange');

// SLL.insertAt(3, 'X');

// displayList(SLL);

//findLast(SLL);

//WhatDoesThisProgramDo(SLL);

thirdFromEnd(SLL);