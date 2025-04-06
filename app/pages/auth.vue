<script setup>
import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig();
const supabaseUrl = config.public.NUXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = config.public.NUXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const instruments = ref([]);

const registerView = ref(false);

async function getInstruments() {
  const { data, error } = await supabase.from("profiles").select();
  if (error) {
    console.error("Error fetching instruments:", error);
    return;
  }
  instruments.value = data;
  return data;
}

onMounted(async () => {
  // Await the function so that instruments are populated before logging
  await getInstruments();
  console.log("Fetched instruments:", instruments.value);
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
      <RegisterForm v-if="registerView" />
      <SignInForm v-else />

      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600">
          {{ registerView ? "Already" : "Don't" }} have an account?

          <a
            href="#"
            class="font-medium text-primary-600 hover:text-primary-500"
            @click="registerView = !registerView"
            >{{ registerView ? "Sign in" : "Register" }}</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
