import { test, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import CounterButton from '@/components/counter-button.vue';
import { store } from '@/store';

test('renders component', () => {
  const wrapper = shallowMount(CounterButton, {
    global: {
      provide: {
        store,
      },
    },
  });

  expect(wrapper.element).toMatchSnapshot();
});
