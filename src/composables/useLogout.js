import { signOut } from "firebase/auth";
import { ref } from "vue";
import { auth } from "../firebase/config";

const error = ref(null);

const logout = async () => {
  error.value = null;
  try {
    await signOut(auth);
  } catch (err) {
    error.value = err;
  }
};

const useLogout = () => {
  return { error, logout };
};

export default useLogout;
