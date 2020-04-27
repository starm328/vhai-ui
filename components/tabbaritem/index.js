import TabBarItem from './tabbar-item.vue';

TabBarItem.install = function (Vue) {
  Vue.component(TabBarItem.name, TabBarItem);
}

export default TabBarItem;