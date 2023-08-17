//NITHIN GOWDA

class MyNode {
  name: string;
  uid: string | null; // private
  // store immediate parent
  parent: MyNode | null;
  isLocked: boolean; // private
  // if true you can read/ write
  thread_locked: boolean;
  /**
   * check if any of  the decendent is  locked
   */
  isDecendantLocked: number; // private
  children: MyNode[];
  constructor(name: string) {
    this.name = name;
    this.uid = null;
    this.parent = null;
    this.isLocked = false;
    this.isDecendantLocked = 0;
    this.children = [];
    this.thread_locked = false;
  }
}
// n: total no of nodes
// each node m no chidren
// h ->  n
// h -> 1/m
// chi

//
class Tree {
  // O(h) => O(lgo_m n)
  lock(node: MyNode, uid: string): boolean {
    // no children is locked
    // no ancestor is locked
    // node is not locked
    // O(log_m n )
    // thread safety
    if (node.isDecendantLocked > 0 || node.isLocked || node.thread_locked) {
      return false;
    }

    let parentNode = node.parent;
    // make all the parent node's decendant locked
    // O(log_m n) time complexicity doesn't increase because we are returning early
    while (parentNode !== null) {
      if (parentNode.thread_locked || parentNode.isLocked) {
        // add normal loack
        const differentThread = parentNode;
        parentNode = node.parent;
        // revert the code untill the last thread
        while (
          parentNode &&
          parentNode.thread_locked &&
          parentNode !== differentThread
        ) {
          parentNode.isDecendantLocked -= 1;
          parentNode.thread_locked = false;
          parentNode = parentNode.parent;
        }
        return false;
      }
      parentNode.thread_locked = true;
      parentNode.isDecendantLocked += 1;
      parentNode = parentNode.parent;
    }

    node.uid = uid;
    node.isLocked = true;
    let current = node;
    while (current && current.parent !== null) {
      current.parent.thread_locked = false;
      current = current.parent;
    }
    node.thread_locked = false;
    // this.threadUnlock(node) // false
    return true;
  }
  // same user
  // O(log_m n )
  unLock(node: MyNode, uid: string): boolean {
    // wait untill the thred is free if tread is locked
    // only the owner user should unlock
    // the node should be locked to unlock it
    if ((node.thread_locked && node.uid !== uid) || !node.isLocked) {
      return false;
    }
    node.isLocked = false;
    node.uid = null;
    let parentNode = node.parent;
    while (parentNode !== null) {
      parentNode.isDecendantLocked -= 1;
      parentNode = parentNode.parent;
    }
    node.thread_locked = false;

    return true;
  }
  //todo
  /**
   *  upgrade lock to node
   *  unlock all children only if it is locked by same user
   * 	can a user upgrade if the node is already locked? -> assumption only by the same user // senario is not possible if done right
   *
   *  O(n)
   */
  upgrade(node: MyNode | null, uid: string): boolean {
    // if(node.isLocked && node.uid!==uid) {    // assumption
    // return false
    // }
    // previous lock validation except decendent
    // O(log_m n )
    if (node === null || node.isLocked || this.isParentLocked(node)) {
      return false;
    }
    // check if all the children is locked by same user //todo
    // O(n)
    if (!this.validateChildLockUid(node, uid)) {
      return false;
    }
    // unlock all the children
    // O(n)
    this.unlockAllChildren(node, uid);
    // lock the current node
    node.uid = uid;
    node.isLocked = true;
    return true;
  }
  // validate if the children is locked by same uid
  private validateChildLockUid(node: MyNode | null, uid: string) {
    if (node === null) {
      return true;
    }
    for (let children of node.children) {
      // children is loced and not by the same user -> false
      // all the grand children should be be valid
      if (
        (children.isLocked && children.uid !== uid) ||
        !this.validateChildLockUid(children, uid)
      ) {
        return false;
      }
    }
    return true;
  }
  // note:-> call it carefully
  private unlockAllChildren(node: MyNode | null, uid: string) {
    if (node === null) {
      return;
    }
    for (let eachChild of node.children) {
      this.unLock(eachChild, uid);
      this.unlockAllChildren(eachChild, uid);
    }
  }
  //   private unlockAllChildren_thread(node: MyNode | null) {
  //     for (let eachChild of node.children) {
  //       eachChild.thread_locked = false;
  //       this.unlockAllChildren_thread(eachChild);
  //     }
  //   }

  //   private unLockAllParents_threads(node: MyNode) {
  //     //lock the
  //     let current = node;
  //     while (current.parent) {
  //       current.parent.thread_locked = false;
  //       current = current.parent;
  //     }
  //   }
  /**
   * check if the prents are locked
   * t: o(h)   h: height of the tree
   * worst		 n:
   *
   *
   *
   *
   */
  private isParentLocked(node: MyNode | null): boolean | 'Thread Locked' {
    let currentNode: MyNode | null = node;

    while (currentNode !== null) {
      if (currentNode.isLocked) {
        return true;
      }
      currentNode = currentNode.parent;
    }
    return false;
  }
}
//
