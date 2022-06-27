// @ts-ignore
class Node1 {
  constructor(element: string) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

// @ts-ignore
class LinkedList {
  constructor() {
    this.head = new Node1("head");
  }

  find(item: any) {
    let currNode = this.head;
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement: any, item: any) {
    let newNode = new Node1(newElement);
    let current = this.find(item);
    if (current.next == null) {
      newNode.next = null;
      newNode.prev = current;
      current.next = newNode;
    } else {
      newNode.next = current.next;
      newNode.prev = current;
      current.next.prev = newNode;
      current.next = newNode;
    }
  }

  remove(item: any) {
    let currNode = this.find(item);
    if (currNode.next !== null) {
      currNode.prev.next = currNode.next;
      currNode.next.prev = currNode.prev;
      currNode.next = null;
      currNode.prev = null;
    }
  }
}

const linkedList = new LinkedList();
