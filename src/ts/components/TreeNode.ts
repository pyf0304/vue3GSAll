export interface TreeNode {
  id: string;
  label: string;
  type: string;
  expanded: boolean;
  children?: TreeNode[];
  parentNode: TreeNode | null;
}
