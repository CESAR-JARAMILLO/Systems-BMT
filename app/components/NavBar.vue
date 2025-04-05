<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Guide",
      icon: "i-lucide-book-open",
      to: "/getting-started",
    },
    {
      label: "Composables",
      icon: "i-lucide-database",
      to: "/composables",
    },
    {
      label: "Components",
      icon: "i-lucide-box",
      to: "/components",
      active: true,
    },
  ],
  [
    {
      label: "GitHub",
      icon: "i-simple-icons-github",
      badge: "3.8k",
      to: "https://github.com/nuxt/ui",
      target: "_blank",
    },
  ],
]);
</script>

<template>
  <div class="flex items-center justify-between p-4 mx-auto max-w-screen-xl">
    <div class="logo">
      <h3>Logo</h3>
    </div>
    <UNavigationMenu color="primary" variant="pill" highlight :items="items" />
  </div>
</template>
