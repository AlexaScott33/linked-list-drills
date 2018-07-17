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

displayList(SLL);

// size(SLL);
// isEmpty(SLL);

// findPrev(SLL, 'Orange');

// SLL.insertAt(3, 'X');

// displayList(SLL);

findLast(SLL);