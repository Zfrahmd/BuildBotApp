<template>
  <div class="home justify-content-center">
    <div class="text-center">
      <img class="robot" src="@/assets/robot-home.png" alt="Robot.jpg" aria-hidden="true">
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
  computed: {
    ...mapState({
      rootFoo: 'foo',
      robotsFoo: 'foo',
    }),
    ...mapGetters({
      rootGetterFoo: 'foo',
      robotsGetterFoo: 'foo',
    }),
  },
};
</script>

<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.robot {
  height: 300px;
}

</style>
