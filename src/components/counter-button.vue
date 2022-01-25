<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();

function inc(): void {
  store.commit('increment');
}
</script>

<template>
  <button
    class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white dark:text-slate-900 transition duration-150 ease-in-out bg-emerald-600 border border-transparent rounded-md hover:bg-emerald-500 focus:outline-none"
    type="button"
    @click="inc"
  >
    count is: {{ store.state.count }}
  </button>
</template>
