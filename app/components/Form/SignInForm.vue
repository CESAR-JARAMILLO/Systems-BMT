<script setup lang="ts">
import { useSignInForm } from "~/composables/useSignInForm";

const { form, errors, isSubmitting, authError, signIn } = useSignInForm();
</script>

<template>
  <h2 class="text-2xl font-bold text-gray-800 mb-6">Sign In</h2>
  <form @submit.prevent="signIn" class="space-y-6">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 mb-1"
        >Email Address</label
      >
      <input
        id="email"
        v-model="form.email"
        type="email"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
        :class="{ 'border-red-500': errors.email }"
        placeholder="john@example.com"
      />
      <p v-if="errors.email" class="mt-1 text-sm text-red-600">
        {{ errors.email }}
      </p>
    </div>

    <div>
      <label for="password" class="block text-sm font-medium text-gray-700 mb-1"
        >Password</label
      >
      <input
        id="password"
        v-model="form.password"
        type="password"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
        :class="{ 'border-red-500': errors.password }"
        placeholder="••••••••"
      />
      <p v-if="errors.password" class="mt-1 text-sm text-red-600">
        {{ errors.password }}
      </p>
    </div>

    <button
      type="submit"
      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors cursor-pointer"
      :disabled="isSubmitting"
    >
      <span v-if="isSubmitting">Signing In...</span>
      <span v-else>Sign In</span>
    </button>

    <p v-if="authError" class="text-sm text-red-600 text-center">
      {{ authError }}
    </p>
  </form>
</template>

<style>
:root {
  --color-primary-500: #8b5cf6;
  --color-primary-600: #7c3aed;
  --color-primary-700: #6d28d9;
}

.text-primary-500 {
  color: var(--color-primary-500);
}
.text-primary-600 {
  color: var(--color-primary-600);
}
.hover\:text-primary-500:hover {
  color: var(--color-primary-500);
}
.hover\:text-primary-700:hover {
  color: var(--color-primary-700);
}

.bg-primary-600 {
  background-color: var(--color-primary-600);
}
.hover\:bg-primary-700:hover {
  background-color: var(--color-primary-700);
}

.border-primary-500 {
  border-color: var(--color-primary-500);
}

.focus\:ring-primary-500:focus {
  --tw-ring-color: var(--color-primary-500);
}
.focus\:border-primary-500:focus {
  border-color: var(--color-primary-500);
}
</style>
