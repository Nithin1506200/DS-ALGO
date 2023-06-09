// pub type LinkedNode = Option<new>

mod add_two_numbers;

pub struct ListNode<T> {
    pub val: T,
    pub next: Option<Box<ListNode<T>>>,
}
impl<T> ListNode<T> {
    fn new(val: T) -> Self {
        ListNode { val, next: None }
    }
    fn push(&mut self, val: T)
    where
        T: Copy,
    {
        let mut ptr = self;
        loop {
            match &mut ptr.next {
                Some(node) => ptr = node.as_mut(),
                None => {}
            }
        }
    }
}
