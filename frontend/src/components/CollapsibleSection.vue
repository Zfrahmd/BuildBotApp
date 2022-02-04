<template>
  <div>
    <div class="header">
      <span v-if="open" @click="open = !open">&#x25B2; Collapse</span>
      <span v-else @click="open = !open">&#x25B2; Expand</span>
    </div>
    <slot v-if="open">
      <!-- Injected content to be placed here -->
      <!-- slot element is vue specific -->
      <div>Slot Default content when no data is passed to Collapsible Section</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'CollapsibleSection',
  data() {
    return {
      open: true,
    };
  },
};
</script>

<style scoped>

.header {
 background-color: #bbb;
 padding: 3px;
 cursor: pointer;
}

</style>
