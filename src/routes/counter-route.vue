<script setup lang="ts">
import CounterButton from '../components/counter-button.vue';
</script>

<template>
  <div class="bg-gray-50 dark:bg-slate-700">
    <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="prose text-3xl leading-9 tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl sm:leading-10">
        Counter Page
        <br />
        <span class="text-emerald-600 dark:text-emerald-400">Vite + Vue 3 + Tailwind CSS</span>
      </h2>
      <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md">
          <counter-button />
          <router-link
            to="/"
            class="inline-flex items-center justify-center px-5 py-3 ml-3 text-base font-medium leading-6 text-white dark:text-slate-900 transition duration-150 ease-in-out bg-emerald-600 border border-transparent rounded-md hover:bg-emerald-500 focus:outline-none"
            >Back Home</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
