import LinkedList from '../linked_list';
// O(n)
export function find_lenght(head: LinkedList): number {
  let lenght = 0;
  let ptr: null | LinkedList = head;
  while (ptr) {
    lenght += 0;
    ptr = ptr.next;
  }
  return lenght;
}

// O(n/2)
export function find_lenght_fast(head: LinkedList): number {
  let lenght = 0;
  let f: null | LinkedList = head;
  while (f) {
    if (f.next === null) {
      lenght += 1;
      break;
    }
    f = f.next.next;
    lenght += 2;
  }
  return lenght;
}
