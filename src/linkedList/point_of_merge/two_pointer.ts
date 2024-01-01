import LinkedList from '../linked_list';

/**
 * given two linked list which is merged , find the point of merge
 * - find the length of both linkedList
 * - find the difference and offset the length
 * - restart from offset length the point of merge will be found
 */
export function point_of_merge_two_pointer(
  a: LinkedList | null,
  b: LinkedList | null
): LinkedList | null {
  if (a === null || b === null) {
    return null;
  }

  let ptr_a: LinkedList | null = a;
  let ptr_b: LinkedList | null = b;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (ptr_a === ptr_b) {
      return ptr_a;
    }
    if (ptr_a === null) {
      ptr_a = b;
    }
    if (ptr_b === null) {
      ptr_b = a;
    }
    ptr_a = ptr_a.next;
    ptr_b = ptr_b.next;
  }
}
