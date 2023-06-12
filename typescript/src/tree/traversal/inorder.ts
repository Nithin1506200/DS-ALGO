import TreeNode from "../tree";

export function inorder_traversal<T>(node: TreeNode<T> | null): Array<T> {
  if (node !== null) {
    return [
      ...inorder_traversal(node.left),
      node.val,
      ...inorder_traversal(node.right),
    ];
  }
  return [];
}
