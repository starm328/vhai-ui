import TabBar from './tabbar.vue';

TabBar.install = function (Vue) {
  Vue.component(TabBar.name, TabBar);
}

export default TabBar;