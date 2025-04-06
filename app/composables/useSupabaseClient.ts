import { createClient } from "@supabase/supabase-js";

export const useSupabaseClient = () => {
  const config = useRuntimeConfig();
  const supabaseUrl = config.public.NUXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = config.public.NUXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables");
  }

  return createClient(supabaseUrl, supabaseAnonKey);
};
