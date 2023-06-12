import TreeNode from '../tree';

/**
 *
 * {@link  https://leetcode.com/problems/symmetric-tree/}
 *
 * `Time Complexity:` O(N)
 *
 * `Auxiliary Space:` O(h) ,where h is the maximum height of the tree
 *
 *  Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 */
export default function is_symmetric(tree: TreeNode | null): boolean {
  function is_mirror(t1: TreeNode | null, t2: TreeNode | null): boolean {
    if (t1 === null && t2 === null) {
      return true;
    }
    if (t1 === null || t2 === null) {
      return false;
    }
    return (
      t1.val === t2.val &&
      is_mirror(t1.left, t2.right) &&
      is_mirror(t1.right, t2.left)
    );
  }
  return is_mirror(tree, tree);
}
