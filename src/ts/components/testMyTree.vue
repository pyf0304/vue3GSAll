<template>
  <div>
    <button @click="selectNodeById(7)">查找树结点</button>

    <tree ref="treeRef" :tree-data="treeData" :selected-node="selectedNode" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue';
  import tree from './myTree.vue';
  import { TreeNode } from './TreeNode';

  export default defineComponent({
    name: 'UseTree',
    components: {
      tree,
    },
    setup() {
      const treeRef = ref();
      const selectedNode = ref(null);
      const treeData: TreeNode[] = reactive([
        // Your data initialization here
        {
          id: '1',
          label: '学院A',
          expanded: true,
          parentNode: null,
          type: '',
          children: [
            {
              id: '2',
              label: '专业A1',
              parentNode: null,
              type: '',
              expanded: false,
              children: [
                {
                  id: '3',
                  label: '班级A11',
                  type: '',
                  parentNode: null,
                  expanded: false,
                },
                {
                  id: '4',
                  label: '班级A12',
                  type: '',
                  parentNode: null,
                  expanded: false,
                },
              ],
            },
            {
              id: '5',
              label: '专业A2',
              expanded: false,
              type: '',
              parentNode: null,
              children: [
                {
                  id: '6',
                  label: '班级A21',
                  type: '',
                  expanded: false,
                  parentNode: null,
                },
                {
                  id: '7',
                  label: '班级A22',
                  type: '',
                  expanded: false,
                  parentNode: null,
                },
              ],
            },
          ],
        },
      ]);
      // Method to select a node in the Tree component
      const selectNodeById = (nodeId: number) => {
        if (treeRef.value) {
          // Call the selectNode method in the Tree component
          treeRef.value.selectNode(nodeId);
        }
      };

      return {
        treeData,
        selectNodeById,
        selectedNode,
        treeRef,
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

  .tree span::before {
    content: '+';
    margin-right: 5px;
  }

  .tree span.selected {
    color: blue;
    font-weight: bold;
  }
</style>
