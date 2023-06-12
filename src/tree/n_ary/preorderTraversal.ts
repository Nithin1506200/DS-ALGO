import { NaryTree } from '../tree';

//https://leetcode.com/problems/n-ary-tree-preorder-traversal/
export default function preorder(root: NaryTree | null): number[] {
  const pre_order: number[] = [];
  if (root === null) {
    return [];
  }
  return pre_order;
}

class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function preorder_(root: Node | null): number[] {
  let result: number[] = [];
  if (root !== null) {
    result.push(root.val);

    if (root.children) {
      for (let node of root.children) {
        result = result.concat(preorder_(node));
      }
    }
  }

  return result;
}
