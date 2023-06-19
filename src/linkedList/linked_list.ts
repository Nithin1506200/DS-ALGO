export default class LinkedList<T = number> {
  val: T;
  next: LinkedList<T> | null;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }

  static from_array<T>(array: Array<T>): LinkedList<T> | null {
    let ll: LinkedList<T> | null = null;
    let ptr: LinkedList<T> | null = ll;
    for (const i of array) {
      if (ptr === null) {
        ll = new LinkedList<T>(i);
        ptr = ll;
      } else {
        ptr.next = new LinkedList<T>(i);
        ptr = ptr.next;
      }
    }
    return ll;
  }
}
