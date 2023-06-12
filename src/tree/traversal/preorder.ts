import TreeNode from '../tree';

export function pre_traversal<T>(node: TreeNode<T> | null): Array<T> {
  if (node !== null) {
    return [
      node.val,
      ...pre_traversal(node.left),
      ...pre_traversal(node.right),
    ];
  }
  return [];
}
