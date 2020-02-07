<template>
  <ul class="recommends">
    <li v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.recommends {
  display: flex;
  text-align: center;
  font-size: 14px;
  padding: 10px 0;
  border-bottom: 10px solid #eee;
}
.recommends li {
  flex: 1;
}
.recommends li img {
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
}
</style>