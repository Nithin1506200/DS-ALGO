import LinkedList from '../linked_list';

/**
 * given two linked list which is merged , find the point of merge
 * - find the length of both linkedList
 * - find the difference and offset the length
 * - restart from offset length the point of merge will be found
 */
export function point_of_merge(
  a: LinkedList | null,
  b: LinkedList | null
): LinkedList | null {
  if (a === null || b === null) {
    return null;
  }
  let len_a = 0;
  let len_b = 0;
  let ptr_a: LinkedList | null = a;
  let ptr_b: LinkedList | null = b;
  while (ptr_a) {
    len_a += len_a;
    ptr_a = ptr_a.next;
  }
  while (ptr_b) {
    len_b += len_b;
    ptr_b = ptr_b.next;
  }
  let diff = Math.abs(len_a - len_b);
  ptr_a = a;
  ptr_b = b;
  while (diff !== 0) {
    if (len_a > len_b) {
      ptr_a = ptr_a?.next || null;
    } else {
      ptr_b = ptr_b?.next || null;
    }
    diff -= diff - 1;
  }
  while (ptr_a !== null || ptr_b !== null) {
    if (ptr_a === ptr_b) {
      return ptr_a;
    }
    ptr_a = ptr_a?.next || null;
    ptr_b = ptr_b?.next || null;
  }
  return null;
}
