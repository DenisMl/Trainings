const Node = require('./node');

class LinkedList {
  constructor() {
    this.length = 0;
    this._head = null;
    this._tail = null;
  }

  /**
   * Append the list
   *
   * @param data
   * @returns {LinkedList}
   */
  append(data) {
    const node = new Node(data);
    if (this.length) {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }
    else {
      this._head = node;
      this._tail = node;
    }
    this.length++;
    return this;
  }

  /**
   * Check list head existence
   *
   * @returns {boolean}
   */
  head() {
    if (this._head) {
      return this._head.data;
    }
    else {
      return false;
    }
  }

  /**
   * Check list tail existence
   *
   * @returns {boolean}
   */
  tail() {
    if (this._tail) {
      return this._tail.data
    }
    else {
      return false;
    }
  }

  /**
   * Get the data from list by index
   *
   * @param index
   * @returns {*}
   */
  at(index) {
    if (this.length === 0 || index < 0 || index > this.length) {
      return this;
    }
    else {
      let currentNode = this._head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      return currentNode.data;
    }
  }

  /**
   * Insert data in list by index
   *
   * @param index
   * @param data
   * @returns {LinkedList}
   */
  insertAt(index, data) {
    if (this.length === 0 || index < 0 || index > this.length) {
      return this;
    }
    else {
      const node = new Node(data);
      let currentNode = this._head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      let currentPrevNode = currentNode.prev;
      node.next = currentNode;
      currentNode.prev = node;
      currentPrevNode.next = node;
      node.prev = currentPrevNode;
    }
    this.length++;
    return this;
  }

  /**
   * Check if list is empty
   *
   * @returns {boolean}
   */
  isEmpty() {
    return !this.length;

  }

  /**
   * Clear the list data
   *
   * @returns {LinkedList}
   */
  clear() {
    let currentNode = this._head;
    let currentNextNode = currentNode.next;
    for (let i = 0; i < this.length; i++) {
      currentNode.data = null;
      if (currentNode.next) {
        currentNode.next = null;
      }
      currentNode.prev = null;
      currentNode = currentNextNode;
      if (currentNextNode.next) {
        currentNextNode = currentNextNode.next;
      }
    }
    this.length = 0;
    return this;
  }

  /**
   * Remove data in list by index
   *
   * @param index
   * @returns {LinkedList}
   */
  deleteAt(index) {
    if (this.length === 0 || index < 0 || index > this.length) {
      return this;
    }
    else {
      let currentNode = this._head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      if (currentNode.next) {
        if (currentNode.prev) {
          currentNode.next.prev = currentNode.prev;
          currentNode.prev.next = currentNode.next;
          currentNode.next = null;
          currentNode.prev = null;
        }
        else if (currentNode.next) {
          currentNode.next.prev = null;
          currentNode.next = null;
        }
        else if (currentNode.prev) {
          currentNode.prev.next = null;
          currentNode.prev = null;
        }
        currentNode.data = null;
      }
      this.length--;
      return this;
    }
  }

  /**
   * Revers the list data order
   *
   * @returns {LinkedList}
   */
  reverse() {
    let currentNode = this._head;
    let nextNode = null;
    let head = this._head;
    for (let i = 0; i < this.length; i++) {
      currentNode.prev = currentNode.next;
      currentNode.next = nextNode;
      nextNode = currentNode;
      currentNode = currentNode.prev;
    }
    this._head = this._tail;
    this._tail = head;
    return this;
  }

  /**
   * Get the data index
   *
   * @param data
   * @returns {number}
   */
  indexOf(data) {
    let currentNode = this._head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode.data === data) {
        return i;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }
}

module.exports = LinkedList;
