import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

const error = ref(null);

const login = async (email, password) => {
  error.value = null;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    error.value = null;
    return res;
  } catch (err) {
    console.log(error.value);
    error.value = "Incorrect login credentials";
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
