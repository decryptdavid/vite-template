import { createStore } from 'vuex';

interface State {
  count: number;
}

export const store = createStore({
  state(): State {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state: State) {
      state.count++;
    },
  },
});
