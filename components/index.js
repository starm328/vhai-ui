import TabBar from './tabbar'
import TabBarItem from './tabbaritem'

const components = [
  TabBar,
  TabBarItem,
]
const install = function(Vue, opts = {}) {
  components.forEach(component => {
    //component.name 是组件库中定义的name值，所以我们开发组件时一定要认真定义组件中的name名称
    Vue.component(component.name, component);
  });
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default{
  install,
  TabBar,
  TabBarItem,
}