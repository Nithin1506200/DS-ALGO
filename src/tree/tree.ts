export default class TreeNode<T = number> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constructor(val: T) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export class NaryTree<T = number> {
  val: T;
  children: NaryTree[];
  constructor(val: T) {
    this.val = val;
    this.children = [];
  }
}
