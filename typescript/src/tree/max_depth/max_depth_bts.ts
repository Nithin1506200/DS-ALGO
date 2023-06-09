import TreeNode from "../tree";

/**
 * `Time Complexicity` : O(N),
 *
 * `Space Complexicity`: O(N)
 */
export default function max_depth_bts(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  return Math.max(max_depth_bts(root.left), max_depth_bts(root.right)) + 1;
}
