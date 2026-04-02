<template>
  <div ref="mindMapContainer" style="width: 100%; height: 500px"></div>
</template>

<script lang="ts">
  import jsMind from 'jsmind';
  import 'jsmind/style/jsmind.css';

  export default {
    name: 'MindMap',
    mounted() {
      this.$nextTick(() => {
        this.initMindMap();
      });
    },
    methods: {
      initMindMap() {
        const mind = new jsMind({
          container: this.$refs.mindMapContainer,
          editable: true,
          theme: 'primary',
          // You can add more options as needed
        });
        const mindMapData2 = {
          meta: {
            name: 'Example Mind Map',
            author: 'You',
          },
          format: 'node_tree',
          data: {
            id: 'root',
            topic: 'Main Topic',
            isroot: true,
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
        const mindMapData = {
          meta: {
            name: 'Example Mind Map',
            author: 'You',
          },
          format: 'node_tree',
          data: {
            id: 'root',
            topic: 'Main Topic',
            isroot: true,
            expanded: true,
            children: [
              {
                id: 'sub1',
                topic: 'Sub Topic 1',
                direction: 'right', // Optionally specify direction
              },
              {
                id: 'sub2',
                topic: 'Sub Topic 2',
                direction: 'right', // Optionally specify direction
              },
            ],
          },
        };

        mind.show(mindMapData2);
      },
    },
    beforeDestroy() {
      const mind = jsMind.get(this.$refs.mindMapContainer);
      if (mind) {
        mind.destroy();
      }
    },
  };
</script>
