<script setup lang="ts">
import combosData from "../../../utils/combos";

const beltOptions = [
  { label: "All", value: "all" },
  { label: "White", value: "white" },
  { label: "Yellow", value: "yellow" },
  { label: "Orange", value: "orange" },
  { label: "Blue", value: "blue" },
];

const selectedBelt = ref("all");
const searchQuery = ref("");

const filteredCombos = computed(() => {
  return combosData
    .map((category) => {
      const filteredCategoryCombos = category.combos.filter((combo) => {
        const matchesBelt =
          selectedBelt.value === "all" ||
          (combo.belt_requirement &&
            combo.belt_requirement.toLowerCase() === selectedBelt.value);
        const matchesSearch = combo.title
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase());
        return matchesBelt && matchesSearch;
      });
      return { ...category, combos: filteredCategoryCombos };
    })
    .filter((category) => category.combos.length > 0);
});
</script>

<template>
  <div class="container mx-auto p-4">
    <!-- Segmented Control -->
    <SegmentedControl :options="beltOptions" v-model="selectedBelt" />

    <!-- Search Input -->
    <div class="flex justify-center mb-4">
      <SearchInput v-model="searchQuery" placeholder="Search combos" />
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <CombosCard
        v-for="(category, catIndex) in filteredCombos"
        :key="catIndex"
        :category="category"
      />
    </div>
  </div>
</template>

<style scoped>
/* All styling is handled via Tailwind CSS */
</style>
