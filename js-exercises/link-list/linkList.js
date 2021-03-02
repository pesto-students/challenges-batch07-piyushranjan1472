import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new LinkListNode(value);
    let current;
    if (this.head == null) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  prepend(value) {
    const node = new LinkListNode(value);
    node.next = this.head;
    this.head = node;
  }

  delete(value) {
    let current = this.head;
    let prev = null;
    while (current) {
      if (current.value === value) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        return true;
      }
      prev = current;
      current = current.next;
    }
    return false;
  }

  traverse() {
    const arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
  }

  contains(value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  length() {
    let curr = this.head;
    let count = 0;
    while (curr) {
      count += 1;
      curr = curr.next;
    }
    return count;
  }
}
