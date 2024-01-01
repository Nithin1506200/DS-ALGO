import LinkedList from './linked_list';

describe('linked list', () => {
  test('initiating', () => {
    const head = new LinkedList(9);
    // 8 and 7
    let ptr: LinkedList | null = head; // head = 9 -> null
    ptr.next = new LinkedList(8); //  head = 9->8->null
    ptr = ptr.next; //  head will not change
    ptr.next = new LinkedList(7);
  });
  test('loop all linked list', () => {
    const head = new LinkedList(9);
    // 8 and 7
    let ptr: LinkedList | null = head; // head = 9 -> null
    ptr.next = new LinkedList(8); //  head = 9->8->null
    ptr = ptr.next; //  head will not change
    ptr.next = new LinkedList(7); // initiazation

    // head
    let newPtr: LinkedList | null = head;
    while (newPtr) {
      newPtr = newPtr.next;
    }
  });
});
