import LinkedList from '../linked_list';

/**
 * You are given the head of a linked list.

Remove every node which has a node with a greater value anywhere to the right side of it.

Return the head of the modified linked list.
 */

type max = {
  val: number;
};
function helper(
  node: LinkedList | null,
  prev: LinkedList | null,
  max: max
): LinkedList | null {
  if (node == null) {
    return null;
  }
  helper(node.next, node, max);
  max.val = Math.max(max.val, node.val);
  if (node.val < max.val) {
    if (prev == null) {
      return node.next;
    } else {
      prev.next = node.next;
    }
  }
  return node;
}
export default function remove_node_if_greater_right(
  head: LinkedList | null
): LinkedList | null {
  const max: max = { val: 0 };
  return helper(head, null, max);
}
