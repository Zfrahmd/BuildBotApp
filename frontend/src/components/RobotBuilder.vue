<template>
  <div class="content">
    <div class="row">
      <div class="col-8">
        <div class="top-row">
          <div class="robot-name">
            {{selectedRobot.head.title}}
            <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
          </div>
          <PartSelector
            :parts="availableParts.heads"
            @partSelected="part => selectedRobot.head=part"
            position="top"/>
        </div>
        <div class="middle-row">
          <PartSelector
            :parts="availableParts.arms"
            @partSelected="part => selectedRobot.leftArm=part"
            position="left"/>
          <PartSelector
            :parts="availableParts.torsos"
            @partSelected="part => selectedRobot.torso=part"
            position="center"/>
          <PartSelector
            :parts="availableParts.arms"
            @partSelected="part => selectedRobot.rightArm=part"
            position="right"/>
        </div>
        <div class="bottom-row">
          <PartSelector
            :parts="availableParts.bases"
            @partSelected="part => selectedRobot.base=part"
            position="bottom"/>
        </div>
      </div>
      <div class="col-4 p-5">
        <div class="row">
          <CollapsibleSection />
          <CollapsibleSection>
            <div class="preview">
              <div class="top-row">
                <img :src="selectedRobot.head.src"/>
              </div>
              <div class="middle-row">
                <img :src="selectedRobot.leftArm.src" class="rotate-left"/>
                <img :src="selectedRobot.torso.src"/>
                <img :src="selectedRobot.rightArm.src" class="rotate-right"/>
              </div>
              <div class="bottom-row">
                <img :src="selectedRobot.base.src"/>
              </div>
            </div>
          </CollapsibleSection>
        </div>
        <div class="row justify-content-center">
          <button class="btn btn-outline-secondary my-2 add-to-cart" @click="addToCart()">
            Add to Cart
          </button>
        </div>
        <div class="row p-3 text-center">
          <h3>Cart</h3>
          <table>
            <thead>
              <tr>
                <th>Robot</th>
                <th class="cost">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(robot, index) in cart" :key="index">
                <td>{{robot.head.title}}</td>
                <td class="cost">{{robot.cost}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row p-5">
        <div id="partInfo">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// always import js files without .js extension
import availableParts from '@/data/parts';
import createdHookMixin from '@/mixins/created-hook-mixin';
import PartSelector from '@/components/PartSelector.vue';
import CollapsibleSection from '@/components/CollapsibleSection.vue';

export default {
  name: 'RobotBuilder',
  components: { PartSelector, CollapsibleSection },
  mixins: [createdHookMixin],
  data() {
    return {
      cart: [],
      availableParts,
      selectedRobot: {
        head: {},
        leftArm: {},
        rightArm: {},
        torso: {},
        base: {},
      },
    };
  },

  computed: {
    headBorderStyle() {
      if (this.selectedRobot.head.onSale) {
        return { border: '3px solid red' };
      }
      return { border: '3px solid #aaa' };
    },
  },
  methods: {
    showPartInfo() {
      this.$router.push('/parts');
    },
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost
        + robot.leftArm.cost
        + robot.torso.cost
        + robot.rightArm.cost
        + robot.base.cost;
      this.cart.push({ ...robot, cost });
    },
  },
};
</script>

<style scoped>

/* .mycontainer {
  zoom: 80%;
} */

.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}

.part img {
  width:165px;
  cursor: pointer;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}

.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}

.sale {
  font-weight: bold;
  color: red;
}

.content {
  position: relative;
}

td, th {
  padding: 5px 10px;
}

.preview {
border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
 transform: rotate(-90deg);
}

</style>
