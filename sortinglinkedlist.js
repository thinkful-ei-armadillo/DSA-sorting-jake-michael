'use strict';

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
  insertBefore(item, key) {
    if (!this.head) {
      this.insertFirst(item);
    } else {
      let currentNode = this.head;
      while (currentNode.next.value !== key) {
        currentNode = currentNode.next;
      }
      currentNode.next = new _Node(item, currentNode.next);
    }
  }
  insertAfter(item, key) {
    if (!this.head) {
      this.insertFirst(item);
    } else {
      let currentNode = this.head;
      while (currentNode.value !== key) {
        currentNode = currentNode.next;
      }
      currentNode.next = new _Node(item, currentNode.next);
    }
  }
  
  insertLast(item) {
    if (!this.head) {
      this.insertFirst(item);
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new _Node(item, null);
    }
  }
  
  insertAt(item, position) {
    if (position === 0) {
      this.insertFirst(item);
    } else {
      let count = 0;
      let currentNode = this.head;
      let previousNode = this.head;
      while (count < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        count++;
      }
      currentNode = new _Node(item, currentNode);
      previousNode.next = currentNode;
    }
  }
  
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    let previousNode = this.head;
  
    while (currentNode !== null && currentNode.value !== item) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log(`Item: ${item} not found.`);
      return;
    }
    previousNode.next = currentNode.next;
    return;
  }
  find(item) {
    let currentNode = this.head;
    if (!this.head) {
      return null;
    }
  
    while (currentNode.value !== item) {
      if (currentNode.next === null) {
        return null;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
}
function insertInSortedOrder(ll, item) {
  let currentNode = ll.head;
  
  if (item < ll.head.value) {
    ll.head = new _Node(item, ll.head);
    return ll;
  }
  let previousNode = ll.head;
  while (currentNode.next !== null && currentNode.value < item) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  previousNode.next = new _Node(item, currentNode);
  return ll;
}
  
function display(ll) {
  let currentNode = ll.head;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}
  
function size(ll) {
  if (!ll.head) {
    console.log(0);
  } else {
    let count = 0;
    let current = ll.head;
    while (current !== null) {
      current = current.next;
      count++;
    }
    console.log(count);
  }
}
  
function isEmpty(ll) {
  if (!ll.head) {
    console.log(true);
  } else {
    console.log(false);
  }
}
  
function findPrevious(ll, item) {
  let currentNode = ll.head;
  if (!ll.head || !ll.head.next) {
    console.log(null);
  }
  
  let previous = currentNode;
  
  while (currentNode.value !== item) {
    if (currentNode.next === null) {
      console.log(null);
    } else {
      previous = currentNode;
      currentNode = currentNode.next;
    }
  }
  console.log(previous);
}
  
function findLast(ll) {
  let currentNode = ll.head;
  if (!ll.head) {
    console.log(null);
  }
  
  let previous = currentNode;
  
  while (currentNode !== null) {
    previous = currentNode;
    currentNode = currentNode.next;
  }
  console.log(previous);
}
  
function removeDupes(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      } else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}
  
// This function has a runtime complexity of O(n^2).  It removes any & all duplicate node in the linked list.
  
function reverseList(ll) {
  let reverseHead = null;
  let current = ll.head;
  while (current !== null) {
    let tempNode = current.next;
    current.next = reverseHead;
    reverseHead = current;
    current = tempNode;
  }
  ll.head = reverseHead;
  return ll;
}
  
function thirdFromTheEnd(ll) {
  let thirdHead = ll.head;
  let end = ll.head.next.next;
  while (end.next !== null) {
    thirdHead = thirdHead.next;
    end = end.next;
  }
  return thirdHead.value;
}
  
function middleNode(ll) {
  if (!ll.head) {
    return null;
  } else {
    let count = 0;
    let current = ll.head;
    while (current !== null) {
      current = current.next;
      count++;
    }
    current = ll.head;
    let halfway = Math.floor(count / 2);
    while (halfway > 0) {
      current = current.next;
      halfway--;
    }
    return current;
  }
}
  
function cycleList(ll) {
  if (!ll.head) {
    return false;
  }
  let singleCurr = ll.head;
  let doubleCurr = ll.head;
  while (
    singleCurr !== doubleCurr &&
      singleCurr.next !== null &&
      doubleCurr.next !== null
  ) {
    singleCurr = singleCurr.next;
    doubleCurr = doubleCurr.next.next;
    if (singleCurr === doubleCurr) {
      return true;
    } else {
      return false;
    }
  }
}
  
module.exports = LinkedList;