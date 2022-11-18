<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { SunIcon } from '@heroicons/vue/24/outline';
import { MoonIcon } from '@heroicons/vue/24/outline';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header v-if="$route.meta.title" class="bg-white dark:bg-slate-800 shadow">
    <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-row">
      <h1 class="text-3xl leading-tight text-gray-900 dark:text-gray-300 flex-1">
        {{ $route.meta.title }}
      </h1>
      <nav class="text-gray-900 dark:text-gray-300 align-right">
        <ul class="flex flex-row">
          <li class="mr-5">
            <button @click="toggleDark()">
              <sun-icon v-if="isDark" class="h-6 w-6 text-slate-800 dark:text-white" />
              <moon-icon v-if="!isDark" class="h-6 w-6 text-slate-800 dark:text-white" />
            </button>
          </li>
          <li class="mr-5">
            <router-link to="/" class="">Home</router-link>
          </li>
          <li>
            <router-link to="/counter" class="">Counter</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <router-view />
  </main>
</template>
