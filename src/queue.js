const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {
  constructor(){
    this.queue= []
  }

  convertArrayToList(arr) {
    return arr.reverse().reduce((prev, current) => {
      if (prev!==null) {
        const newListNode = new ListNode(current);
        newListNode.next = prev;
        return newListNode;
      }
      return new ListNode(current);
    }, null);
  }
  getUnderlyingList() {
    return this.convertArrayToList(this.queue)
  }

  enqueue(value) {
    this.queue.push(value)
  }

  dequeue() {
    const firstElement=this.queue[0]
    this.queue.shift()
    return firstElement
  }
}

module.exports = {
  Queue
};
