<script setup>
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    default: "all",
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (value) => {
  emit("update:modelValue", value);
};
</script>

<template>
  <div class="flex justify-center space-x-2 mb-4">
    <button
      v-for="option in options"
      :key="option.value"
      @click="updateValue(option.value)"
      :class="[
        'px-4 py-2 rounded font-semibold transition-colors',
        modelValue === option.value
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 text-gray-800',
      ]"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<style scoped>
/* Styling handled via Tailwind CSS */
</style>
