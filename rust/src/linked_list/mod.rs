use std::fmt::Debug;

mod reverse;

pub type Link<T> = Option<Box<Node<T>>>;
#[derive(Debug, PartialEq, Clone)]
pub struct Node<T>
where
    T: Copy,
{
    pub val: T,
    pub next: Link<T>,
}
#[derive(Debug, PartialEq)]
pub struct MyLinkedList<T>
where
    T: Copy,
{
    head: Link<T>,
}
#[allow(dead_code)]
impl<T> MyLinkedList<T>
where
    T: Copy + Debug,
{
    pub fn from_array(ele: Box<[T]>) -> Self {
        if ele.len() == 0 {
            return Self { head: None };
        }
        let mut head: Box<Node<T>> = Box::new(Node {
            val: ele[0],
            next: None,
        });
        for i in 1..ele.len() {
            let node: Node<T> = Node {
                val: ele[i],
                next: None,
            };
            head.next = Some(Box::new(node));
        }
        Self { head: Some(head) }
    }
    pub fn reverse(&mut self) {
        let mut prev = None;
        let mut current: Option<Box<Node<T>>> = self.head.take();
        while let Some(mut current_) = current.take() {
            let next = current_.next.take();
            current_.next = prev;
            prev = Some(current_);
            match next {
                Some(next) => current = Some(next),
                None => break,
            }
        }
        self.head = prev;
    }
}

#[cfg(test)]
mod test {
    use super::{MyLinkedList, Node};
    #[test]
    fn from_array() {
        let ll = MyLinkedList::from_array(Box::new([1, 2, 3, 4]));
        println!("linked list from array {:?}", ll)
    }
    #[test]
    fn reverse() {
        let mut ll = MyLinkedList {
            head: Some(Box::new(Node {
                val: 12,
                next: Some(Box::new(Node {
                    val: 13,
                    next: None,
                })),
            })),
        };
        ll.reverse();
        println!("{:?}", ll);
    }
}
