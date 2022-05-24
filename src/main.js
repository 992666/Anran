// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import './assets/css/reset.css'
import './assets/js/remstyle.js'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
//vant
import { ImagePreview } from 'vant';
// 全局注册
Vue.use(ImagePreview);
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
import { Search } from 'vant';
Vue.use(Search);
import { Icon } from 'vant';
Vue.use(Icon);
import { Lazyload } from 'vant';
Vue.use(Lazyload);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
import { NoticeBar } from 'vant';
Vue.use(NoticeBar);
import { TreeSelect } from 'vant';
Vue.use(TreeSelect);
import { Image as VanImage } from 'vant';
Vue.use(VanImage);
import { Grid, GridItem } from 'vant';
Vue.use(Grid);
Vue.use(GridItem);
import { NavBar } from 'vant';
Vue.use(NavBar);
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
import { Toast } from 'vant';
Vue.use(Toast);
import { Empty } from 'vant';
Vue.use(Empty);
import { Popup } from 'vant';
Vue.use(Popup);
import { ShareSheet } from 'vant';
Vue.use(ShareSheet);
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
import { SwipeCell } from 'vant';
Vue.use(SwipeCell);
import { Card } from 'vant';
Vue.use(Card);
import { Button } from 'vant';
Vue.use(Button);
import { Stepper } from 'vant';
Vue.use(Stepper);
import { AddressList } from 'vant';
Vue.use(AddressList);
import { AddressEdit } from 'vant';
Vue.use(AddressEdit);
import { Form } from 'vant';
import { Field } from 'vant';
Vue.use(Form);
Vue.use(Field);
import { Cell, CellGroup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);
import { Uploader } from 'vant';
Vue.use(Uploader);
import { Picker } from 'vant';
Vue.use(Picker);
import { Notify } from 'vant';
Vue.use(Notify);
import { PullRefresh } from 'vant';
Vue.use(PullRefresh);
import { List } from 'vant';
Vue.use(List);
import { Dialog } from 'vant';
Vue.use(Dialog);
import { Collapse, CollapseItem } from 'vant';
Vue.use(Collapse);
Vue.use(CollapseItem);
import { ActionSheet } from 'vant';
Vue.use(ActionSheet);
import { Rate } from 'vant';
Vue.use(Rate);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.afterEach((to, from) => {
  window.scrollTo(0,0);
 })
