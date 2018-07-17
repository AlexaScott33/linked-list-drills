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
    console.log('LOOOK', currNode);
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

function main() {
  let SLL = new LinkedList();
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
  console.log(JSON.stringify(SLL, null, 2));
  return SLL;
}

main();