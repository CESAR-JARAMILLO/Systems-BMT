import { signInWithPassword } from "~/composables/useAuth";

export const useSignInForm = () => {
  const form = reactive({
    email: "",
    password: "",
  });

  const errors = reactive<{ email?: string; password?: string }>({});
  const isSubmitting = ref(false);
  const authError = ref("");

  const validateForm = (): boolean => {
    errors.email = !form.email ? "Email is required" : "";
    errors.password = !form.password ? "Password is required" : "";

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Email is invalid";
    }

    return !Object.values(errors).some((error) => error);
  };

  const signIn = async () => {
    authError.value = "";
    if (!validateForm()) return;

    isSubmitting.value = true;
    try {
      const { data, error } = await signInWithPassword(form.email, form.password);
      if (error) {
        authError.value = error.message;
      } else {
        console.log("Sign in successful:", data);
        await navigateTo("/dashboard");
      }
    } catch (err) {
      console.error("Error signing in:", err);
      authError.value = "Sign in failed. Please try again.";
    } finally {
      isSubmitting.value = false;
    }
  };

  return { form, errors, isSubmitting, authError, signIn };
};
