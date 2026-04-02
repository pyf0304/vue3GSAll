<template>
  <div class="tree">
    <ul>
      <li v-for="node in treeData" :key="node.id">
        <span :class="{ expanded: node.expanded }" @click="toggleNode(node)">
          {{ node.label }}
        </span>
        <ul v-if="node.expanded">
          <li v-for="childNode in node.children" :key="childNode.id">
            <span
              :class="{
                expanded: childNode.expanded,
                selected: childNode === selectedNode0,
              }"
              @click="toggleNode(childNode)"
            >
              {{ childNode.label }}
            </span>
            <ul v-if="childNode.expanded">
              <li v-for="grandchildNode in childNode.children" :key="grandchildNode.id">
                <span
                  :class="{
                    expanded: grandchildNode.expanded,
                    selected: grandchildNode === selectedNode0,
                  }"
                  @click="toggleNode(grandchildNode)"
                >
                  {{ grandchildNode.label }}
                </span>
                <ul v-if="grandchildNode.expanded">
                  <li v-for="ggrandchildNode in grandchildNode.children" :key="ggrandchildNode.id">
                    <span
                      :class="{
                        nochild: ggrandchildNode.children == null,
                        selected: ggrandchildNode === selectedNode0,
                      }"
                      @click="toggleNode(ggrandchildNode)"
                    >
                      {{ ggrandchildNode.label }}
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { TreeNode } from './TreeNode';
  export default defineComponent({
    name: 'TreeV3',
    props: {
      treeData: {
        type: Array as () => TreeNode[],
        required: true,
      },
      selectedNode: {
        type: Object as () => TreeNode | null,
        required: false,
        default: null,
      },
    },
    emits: ['on-node-click'],
    setup(props, { emit }) {
      const selectedNode0 = ref(props.selectedNode);

      const toggleNode = (node: TreeNode) => {
        // console.error('node in toggleNode', node);
        node.expanded = !node.expanded;
        selectedNode0.value = node;
        const strParentId = getParentIdLst(node);
        emit('on-node-click', {
          type: node.type,
          id: node.id,
          parentId: strParentId,
          content: '结点单击事件',
        });
        if (node.expanded == true) CollapseOther(node);
      };
      const CollapseOther = (node: TreeNode) => {
        if (node.parentNode == null) {
          const arr = props.treeData.filter((x) => x.type == node.type);
          for (const obj of arr) obj.expanded = false;
          node.expanded = true;
        } else {
          const objParent = node.parentNode;
          if (objParent.children == null) return;
          const arr = objParent.children.filter((x) => x.type == node.type);
          for (const obj of arr) obj.expanded = false;
          node.expanded = true;
        }
      };
      const getParentIdLst = (node: TreeNode) => {
        let strParentId = '';
        const parent = node.parentNode;
        if (parent != null) {
          let objParent = node.parentNode;
          let objCurrNode = node;
          while (true) {
            if (objParent == null || objParent.id == '') break;
            strParentId += `${objParent.id}|`;
            objParent.expanded = true;

            // console.log('objParent:', objParent);

            objCurrNode = objParent;
            objParent = objCurrNode.parentNode;
          }
        }
        return strParentId;
      };
      // Method to handle selecting a specific node
      const selectNodeSim = (type: string, nodeId: string) => {
        console.error('需要找的nodeId', nodeId);
        const node = findNodeById(props.treeData[0], type, nodeId);
        if (node) {
          toggleNode(node);
          console.error('找到的node', node.label, node.type, node.id);
          const parent = node.parentNode;
          if (parent != null) {
            let objParent = node.parentNode;
            let objCurrNode = node;
            while (true) {
              if (objParent == null || objParent.id == '') break;
              objParent.expanded = true;

              // console.log('objParent:', objParent);

              objCurrNode = objParent;
              objParent = objCurrNode.parentNode;
            }
          }
          selectedNode0.value = node;
        }
      };
      const findNodeById = (node: TreeNode, type: string, nodeId: string): TreeNode | null => {
        if (node.id === nodeId && node.type === type) {
          return node;
        }

        if (node.children) {
          for (const child of node.children) {
            const foundNode = findNodeById(child, type, nodeId);
            if (foundNode) {
              return foundNode;
            }
          }
        }

        return null;
      };
      // Method to handle selecting a specific node
      const selectNode = (type: string, nodeId: string) => {
        const { node, parent } = findNodeAndParentById(props.treeData[0], type, nodeId, null);
        if (node) {
          toggleNode(node);
          console.log('node:', node);
          console.log('parent:', parent);
          if (parent != null) {
            let objParent = node.parentNode;
            let objCurrNode = node;
            while (true) {
              if (objParent == null || objParent.id == '') break;
              objParent.expanded = true;

              // console.log('objParent:', objParent);

              objCurrNode = objParent;
              objParent = objCurrNode.parentNode;
            }
          }
          selectedNode0.value = node;
        }
      };
      const findNodeAndParentById = (
        node: TreeNode,
        type: string,
        nodeId: string,
        parent: TreeNode | null,
      ): { node: TreeNode | null; parent: TreeNode | null } => {
        if (node.id === nodeId && node.type === type) {
          return { node, parent };
        }

        if (node.children) {
          for (const child of node.children) {
            const { node: foundNode, parent: foundParent } = findNodeAndParentById(
              child,
              type,
              nodeId,
              node,
            );
            if (foundNode) {
              return { node: foundNode, parent: foundParent };
            }
          }
        }

        return { node: null, parent: null };
      };

      // Function to populate the parentNode property
      const populateParentNodes = (treeData: TreeNode[]) => {
        const queue: TreeNode[] = []; // Create a queue to perform BFS
        const root: TreeNode = {
          id: 'root',
          label: 'Root',
          type: 'root',
          expanded: false,
          children: treeData,
          parentNode: null,
        };
        queue.push(root); // Add the root node to the queue

        while (queue.length > 0) {
          const currentNode = queue.shift(); // Get the first node from the queue
          const children = currentNode?.children;

          if (children) {
            // If the current node has children, add them to the queue and set their parentNode property
            for (const child of children) {
              child.parentNode = currentNode;
              queue.push(child);
            }
          }
        }
      };
      onMounted(() => {
        populateParentNodes(props.treeData);
      });
      // watch(
      //   () => props.selectedNodeId,
      //   (newNodeId) => {
      //     if (newNodeId) {
      //       findAndSelectNodeV2(props.treeData[0], newNodeId);
      //     }
      //   }
      // );
      // Example usage to find and select a node with id 6
      // findAndSelectNode(props.treeData[0], 6);
      return {
        selectedNode0,
        toggleNode,
        selectNode,
        selectNodeSim,
        populateParentNodes,
        getParentIdLst,
      };
    },
  });
</script>

<style scoped>
  .tree {
    font-family: Arial, sans-serif;
  }

  .tree ul {
    list-style: none;
    padding-left: 20px;
  }

  .tree span {
    cursor: pointer;
  }

  .tree span.expanded::before {
    content: '-';
    margin-right: 5px;
  }

  .tree span.nochild::before {
    content: '';
    margin-right: 5px;
  }

  .tree span::before {
    content: '+';
    margin-right: 5px;
  }

  .tree span.selected {
    color: blue;
    font-weight: bold;
  }
</style>
