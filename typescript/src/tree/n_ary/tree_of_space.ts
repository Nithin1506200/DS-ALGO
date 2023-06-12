/**
 * Here are the definitions for the Operations:
Lock(X, uid)Lock takes an exclusive access on the subtree rooted at X. It is formally defined like this:Once lock(X, uid) succeeds, then:   lock(A, anyUserId) should fail (returns false), where A is a descendent of X,
    lock(B, anyUserId) should fail (returns false), where X is a descendent of B
    Lock operation cannot be performed on a node which is already locked i.e. lock(X, anyUserId) should fail (returns false).Unlock(X, uid)   Unlock reverts what was done by the Lock operation. It can only be called on same node on which user uid had called a Lock on before. Returns true if it is successful.UpgradeLock(X, uid)   It helps the user uid upgrade their lock to an ancestor node. It is only possible if the node X already has locked descendants and all of them are only locked by the same user uid. Upgrade should fail if there is any node which is descendant of X that is locked by a different user. Successful Upgrade will ‘Lock’ the node. UpgradeLock call shouldn’t violate the consistency model that Lock/Unlock function requires
 */
class MyNode_ {
  name: string;
  uid: string | null;
  parent: MyNode | null;
  isLocked: boolean;
  isDecendantLocked: number;
  children: MyNode[];
  constructor(name: string) {
    this.name = name;
    this.uid = null;
    this.parent = null;
    this.isLocked = false;
    this.isDecendantLocked = 0;
    this.children = [];
  }
}

class Ntree {
  lock(node: MyNode, uid: string): boolean {
    //todo
    // check decenatnt is locked or self is locked
    if (
      node.isDecendantLocked > 0 ||
      node.isLocked ||
      this.isParentLocked(node.parent)
    ) {
      return false;
    }
    node.uid = uid;
    node.isLocked = true;
    // increase the count of all parent locks
    let parentNode = node.parent;
    while (parentNode !== null) {
      parentNode.isDecendantLocked += 1;

      parentNode = parentNode.parent;
    }
    return true;
  }
  /**
   * unlock only when
   * - uid matches
   * - node is locked
   * - parent is not locked
   * @param node
   * @param uid
   * @returns
   */
  unLock(node: MyNode, uid: string): boolean {
    //todo
    // check decenatnt is locked or self is locked
    if (node.uid !== uid || !node.isLocked) {
      return false;
    }
    node.isLocked = false;
    node.uid = null;
    // decrease the count of all parent locks
    let parentNode = node.parent;
    while (parentNode !== null) {
      parentNode.isDecendantLocked -= 1;
      parentNode = parentNode.parent;
    }
    return true;
  }
  upgrade(node: MyNode, uid: string): boolean {
    if (node.isDecendantLocked === 0 || this.isParentLocked(node.parent)) {
      return false;
    }
    this.unlockAllChildren(node, uid);
    this.lock(node, uid);
    return true;
  }
  private isParentLocked(node: MyNode | null): boolean {
    let tempNode = node;
    while (tempNode !== null) {
      if (tempNode.isLocked) {
        return true;
      }
      tempNode = tempNode.parent;
    }
    return false;
  }
  private unlockAllChildren(node: MyNode, uid: string) {
    for (let eachChild of node.children) {
      this.unLock(eachChild, uid);
      this.unlockAllChildren(eachChild, uid);
    }
  }
}
