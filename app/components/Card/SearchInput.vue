<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "Search combos",
  },
});

const emit = defineEmits(["update:modelValue"]);

function updateValue(e: Event) {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>

<template>
  <input
    :value="modelValue"
    @input="updateValue"
    :placeholder="placeholder"
    class="max-w-md w-full px-4 py-2 border border-gray-300 rounded"
  />
</template>

<style scoped>
/* All styling is handled via Tailwind CSS */
</style>
