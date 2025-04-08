<script setup lang="ts">
const { category } = defineProps({
  category: {
    type: Object,
    required: true,
  },
});

// Helper function to return Tailwind classes for belt badges
const getBeltClasses = (belt: string): string => {
  switch (belt.toLowerCase()) {
    case "white":
      return "bg-gray-100 text-gray-800";
    case "yellow":
      return "bg-yellow-400 text-black";
    case "orange":
      return "bg-orange-400 text-black";
    case "blue":
      return "bg-blue-500 text-white";
    default:
      return "bg-gray-200 text-gray-800";
  }
};
</script>

<template>
  <div
    v-for="(combo, comboIndex) in category.combos"
    :key="comboIndex"
    class="bg-white rounded-lg shadow overflow-hidden flex flex-col h-full text-center"
  >
    <!-- Category Header -->
    <div class="bg-blue-600 text-white p-4">
      <h2 class="text-lg font-bold">{{ combo.title }}</h2>
    </div>
    <!-- Category Content -->
    <div class="p-4 flex-grow flex flex-col">
      <div class="mb-4 w-60 mx-auto">
        <!-- Belt Badge -->
        <div class="mb-2">
          <span
            class="inline-block px-2 py-1 text-xs font-bold rounded-full uppercase"
            :class="
              combo.belt_requirement
                ? getBeltClasses(combo.belt_requirement)
                : 'bg-gray-300 text-gray-800'
            "
          >
            {{
              combo.belt_requirement
                ? combo.belt_requirement + " Belt Requirement"
                : "No Belt Requirement"
            }}
          </span>
        </div>
        <!-- Combo Moves -->
        <ul class="list-disc pl-5 text-left">
          <li
            v-for="(move, moveIndex) in combo.moves"
            :key="moveIndex"
            class="text-sm text-gray-700 font-semibold"
          >
            {{ move }}
          </li>
        </ul>
      </div>
      <!-- References Section -->
      <div
        v-if="category.references && category.references.length"
        class="mt-auto pt-4 border-t"
      >
        <h4 class="font-bold text-gray-800 mb-2">References:</h4>
        <ul class="list-disc pl-5">
          <li
            v-for="(ref, refIndex) in category.references"
            :key="refIndex"
            class="text-sm"
          >
            <a
              :href="ref.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 hover:underline"
            >
              {{ ref.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* All styling is handled via Tailwind CSS */
</style>
