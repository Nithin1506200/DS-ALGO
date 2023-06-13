import LinkedList from '../linked_list';

export function middle_element(head: LinkedList): number | undefined {
  let s: LinkedList | null = head;
  let f: LinkedList | null = head;
  while (s && f && f.next) {
    s = s.next;
    f = f.next.next;
  }
  return s?.val;
}
