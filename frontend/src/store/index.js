import { createStore } from 'vuex';

import robotModule from './modules/robots';

export default createStore({
  state: {
    foo: 'root-foo',
  },
  modules: {
    robots: robotModule,
  },
  getters: {
    foo(state) {
      return `root-getter/${state.foo}`;
    },
  },
});
