<template>
  <div class="partinfo">
    <PartInfo />
  </div>
</template>

<script>
// @ is an alias to /src
import PartInfo from '@/components/PartInfo.vue';

export default {
  name: 'Parts',
  components: {
    PartInfo,
  },
};
</script>
