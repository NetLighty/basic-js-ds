const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((prev, current) => {
    if (prev!==null) {
      const newListNode = new ListNode(current);
      newListNode.next = prev;
      return newListNode;
    }
    return new ListNode(current);
  }, null);
}

function getValuesFromList(list){
  if(list.next===null) {
    listValues.push(list.value)
    return ''
  }
  listValues.push(list.value)
  return getValuesFromList(list.next)
}

let listValues = []
function removeKFromList(l, k) {
  getValuesFromList(l)
  const filteredValues= listValues.filter(el=> el!==k)
  listValues= []
  return convertArrayToList(filteredValues)
}

module.exports = {
  removeKFromList
};