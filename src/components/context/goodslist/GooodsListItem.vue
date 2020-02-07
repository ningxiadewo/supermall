<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goods-item-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.goods-item {
  flex: 50%;
  padding: 7px 7px 35px 0;
  position: relative;
}
.goods-item img {
  width: 100%;
  border-radius: 10px;
}
.goods-item-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-item-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.price {
  color: var(--color-high-text);
  margin-right: 25px;
}
.collect {
  position: relative;
}
.collect::before {
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  content: "";
  background: url(~assets/img/common/collect.svg) 0 0/14px 14px;
}
</style>
