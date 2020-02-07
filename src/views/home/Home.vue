<template>
  <div id="home">
    <!-- 头部 -->
    <nav-bar class="home-nav">
      <div slot="center">购 物 街</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
    <!-- 推荐 -->
    <home-recommend :recommends="recommends"></home-recommend>
    <!-- 特点图片 -->
    <home-feature></home-feature>
    <!-- 切换栏 -->
    <tab-control
      :titles="['流行', '最新', '精选']"
      class="home-tab-control"
      @tabClick="tabClick"
    ></tab-control>
    <!-- 商品列表 -->
    <goods-list :goods="showGoods"></goods-list>
    <ul>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
      <li>好好</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/context/tabcontrol/TabControl";
import GoodsList from "components/context/goodslist/GoodsList";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeature from "./childComps/HomeFeature";

import { getHomeMultidata, getHomeGoodsData } from "network/home";
export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentType: "pop" // 默认类型流行
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 请求首页数据
    this.HomeMultidata();

    // 请求首页商品数据
    this.HomeGoodsData("pop");
    this.HomeGoodsData("new");
    this.HomeGoodsData("sell");
  },
  methods: {
    /*
     * 事件监听部分
     */
    tabClick(index) {
      switch (index) {
        case 0: {
          this.currentType = "pop";
          break;
        }
        case 1: {
          this.currentType = "new";
          break;
        }
        case 2: {
          this.currentType = "sell";
          break;
        }
        default: {
          this.currentType = "pop";
          break;
        }
      }
    },
    /*
     * 网络请求部分
     */
    HomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    HomeGoodsData(type) {
      // 每一次请求数据的页码加一
      const page = this.goods[type].page + 1;
      getHomeGoodsData(type, page).then(res => {
        // 把商品数据添加到goods对象保存起来
        this.goods[type].list.push(...res.data.list);
        // 商品数据的页数加一
        this.goods[type].page += 1;
      });
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}
.home-tab-control {
  position: sticky;
  top: 44px;
  z-index: 999;
}
</style>
