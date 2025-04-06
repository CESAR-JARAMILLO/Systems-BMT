import { useSupabaseClient } from "./useSupabaseClient";

export async function signInWithPassword(email: string, password: string) {
  const supabase = useSupabaseClient();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
}
