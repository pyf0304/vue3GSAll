<template>
  <div ref="mindMapContainer" style="width: 100%; height: 500px"></div>
</template>

<script lang="ts">
  import jsMind from 'jsmind';
  // import 'jsmind/jsmind.draggable';
  import 'jsmind/style/jsmind.css';

  export default {
    name: 'MindMap',
    data() {
      return {
        mindMap: null,
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.initMindMap();
      });
    },
    methods: {
      initMindMap() {
        const options = {
          container: this.$refs.mindMapContainer,
          editable: true,
          theme: 'primary',
          // You can add more options as needed
        };

        const mindMapData = {
          meta: {
            name: 'Example Mind Map',
            author: 'You',
          },
          format: 'node_array',
          data: [
            {
              id: 'root',
              isroot: true,
              topic: 'Main Topic',
              expanded: true,
            },
            {
              id: 'sub1',
              parentid: 'root', // 指定sub1节点属于root节点
              topic: 'Sub Topic 1',
              direction: 'right',
            },
            {
              id: 'sub2',
              parentid: 'root', // 指定sub2节点属于root节点
              topic: 'Sub Topic 2',
              direction: 'right',
            },
          ],
        };

        const mindMapData2 = {
          meta: {
            name: 'Example Mind Map',
            author: 'You',
          },
          format: 'node_tree',
          data: {
            id: 'root',
            topic: 'Main Topic',
            // isroot: true,
            expanded: true,
            children: [
              {
                id: 'sub1',
                topic: 'Sub Topic 1',
                direction: 'right',
              },
              {
                id: 'sub2',
                topic: 'Sub Topic 2',
                direction: 'right',
              },
            ],
          },
        };
        const mindMapData3 = {
          meta: {
            name: 'Example Mind Map',
            author: 'You',
          },
          format: 'node_tree',
          data: {
            id: 'root',
            topic: 'Main Topic',
            expanded: true,
            children: [
              {
                id: 'sub1',
                topic: 'Sub Topic 1',
                direction: 'right',
              },
              {
                id: 'sub2',
                topic: 'Sub Topic 2',
                direction: 'right',
              },
            ],
          },
        };
        // this.mindMap = jsMind.show(options, mindMapData);
        this.mindMap = new jsMind(options);
        console.log(this.mindMap); // Check if the mind object is correctly initialized

        if (this.mindMap != null) {
          this.mindMap.show(mindMapData);
        }
      },
    },
    beforeDestroy() {
      if (this.mindMap) {
        this.mindMap.destroy();
        this.mindMap = null;
      }
    },
  };
</script>
