<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in titles"
      :key="item"
      :class="{ isActive: currentIndex === index }"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style>
.tab-control {
  height: 40px;
  line-height: 40px;
  display: flex;
  text-align: center;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  justify-content: space-around;
}
.tab-control-item span {
  display: inline-block;
  height: 40px;
  padding: 0 5px;
}
.isActive span {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
}
</style>
