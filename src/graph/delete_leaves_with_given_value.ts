/* eslint-disable @typescript-eslint/no-unused-vars */
import TreeNode from './graph';
/**
 * 
https://leetcode.com/problems/delete-leaves-with-a-given-value/description/?envType=daily-question&envId=2024-05-17

 Given a binary tree root and an integer target, delete all the leaf nodes with value target.

 Note that once you delete a leaf node with value target, if its parent node becomes a leaf node and has the value target, it should also be deleted (you need to continue doing that until you cannot).
 */

function removeLeafNodes(
  root: TreeNode | null,
  target: number
): TreeNode | null {
  if (root == null) {
    return null;
  } else {
    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);
    if (root.right == null && root.left == null && root.val == target) {
      return null;
    } else {
      return root;
    }
  }
}
