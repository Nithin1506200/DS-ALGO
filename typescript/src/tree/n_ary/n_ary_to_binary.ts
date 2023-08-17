import TreeNode from '../tree';

import { NaryTree } from '../tree';
/**
 * Convert a Generic Tree(N-array Tree) to Binary Tree
 * - The root of the Binary Tree is the Root of the Generic Tree.
 * - The left child of a node in the Generic Tree is the Left child of that node in the Binary Tree.
 * - The right sibling of any node in the Generic Tree is the Right child of that node in the Binary Tree.
 ```
              a
         /     \  \
        b     c    d
    

 ```
 
 
 */
export default function n_ary_to_binary(
  root: NaryTree | null
): TreeNode | null {
  if (root === null) {
    return null;
  }
  const tree: TreeNode = new TreeNode(root.val);
  if (root.children.length === 0) {
    return tree;
  }
  // set the left tree
  tree.left = n_ary_to_binary(root.children[0]);

  let curr: TreeNode | null = tree.left;
  // loop the rightside tree
  for (let i = 1; i < root.children.length; i++) {
    if (curr !== null) {
      curr.right = n_ary_to_binary(root.children[i]);
      curr = curr.right;
    }
  }
  return tree;
}
