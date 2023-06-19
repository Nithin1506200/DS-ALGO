import LinkedList from '../linked_list';
import { point_of_merge_two_pointer } from './two_pointer';
import { describe } from 'vitest';
describe('point of merge', () => {
  test('two pointer eg1', () => {
    // let the point of merge be 7
    const l1 = LinkedList.from_array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const l2 = new LinkedList(45);
    l2.next = new LinkedList(66);
    l2.next = l1?.next?.next?.next?.next?.next?.next || null;
    expect(point_of_merge_two_pointer(l1, l2)?.val).toBe(7);
  });
  test('two pointer eg1', () => {
    // let the point of merge be 8
    const l1 = LinkedList.from_array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const l2 = new LinkedList(45);
    l2.next = new LinkedList(66);
    l2.next = l1?.next?.next?.next?.next?.next?.next?.next || null;
    // console.log(l1, l2);
    expect(point_of_merge_two_pointer(l1, l2)?.val).toBe(8);
  });
});
