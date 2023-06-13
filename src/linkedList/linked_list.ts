export default class LinkedList<T = number> {
  val: T;
  next: LinkedList<T> | null;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }

  static from_array<T>(array: Array<T>): LinkedList<T> | null {
    let ll: LinkedList<T> | null = null;
    for (const i of array) {
      if (ll === null) {
        ll = new LinkedList<T>(i);
      } else {
        ll.next = new LinkedList<T>(i);
      }
    }
    return ll;
  }
}
