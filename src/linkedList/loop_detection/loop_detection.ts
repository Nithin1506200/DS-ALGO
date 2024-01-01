import LinkedList from '../linked_list';
/**
 *
 * Floyd’s Cycle-Finding Algorithm:
 */
export function loop_detection(head: LinkedList | null): boolean {
  if (head === null) {
    return false;
  }
  let slow_pointer: LinkedList | null = head;
  let fast_pointer: LinkedList | null = head;
  while (slow_pointer !== null && fast_pointer !== null && fast_pointer.next) {
    slow_pointer = slow_pointer.next;
    fast_pointer = fast_pointer.next.next;
    if (slow_pointer === fast_pointer) {
      return true;
    }
  }
  return false;
}
