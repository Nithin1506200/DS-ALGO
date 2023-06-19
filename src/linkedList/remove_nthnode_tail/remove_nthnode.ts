/**
 * {@link https://leetcode.com/problems/remove-nth-node-from-end-of-list/}
 */

import LinkedList from '../linked_list';

function remove_nth_node_from_last(ll: LinkedList, n: number) {
  let slow_ptr: LinkedList | null = ll;
  let fast_ptr: LinkedList | null = ll;
  for (let i = 0; i < n - 1; i++) {
    fast_ptr = fast_ptr?.next || null;
  }
  while (fast_ptr !== null && slow_ptr?.next !== null) {
    fast_ptr = fast_ptr.next;
    slow_ptr = slow_ptr?.next;
  }
  return slow_ptr;
}
