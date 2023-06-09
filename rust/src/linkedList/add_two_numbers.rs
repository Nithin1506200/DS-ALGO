// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/

use super::ListNode;
pub fn add_two_numbers(
    l1: Option<Box<ListNode<i32>>>,
    l2: Option<Box<ListNode<i32>>>,
) -> Option<Box<ListNode<i32>>> {
    match (l1, l2) {
        (Some(l1), Some(l2)) => {
            let mut ans: ListNode<i32> = ListNode { val: 0, next: None };
            let mut l1_ptr: Option<Box<ListNode<i32>>> = Some(l1);
            let mut l2_ptr: Option<Box<ListNode<i32>>> = Some(l2);
            loop {
                match (l1_ptr.as_mut(), l2_ptr.as_mut()) {
                    (Some(ptr1), Some(ptr2)) => {
                        let current_val = ptr1.val + ptr2.val;
                        ans.val = current_val;
                    }
                    (None, None) => {
                        break;
                    }
                    (_, _) => {
                        return None;
                    }
                };
            }

            todo!()
        }
        (_, _) => None,
    }
}
