import { addDoc, collection } from "firebase/firestore";
import { ref } from "vue";
import { db } from "../firebase/config";

const useCollection = (collection1) => {
  const error = ref(null);

  const addDoc1 = async (doc) => {
    error.value = null;

    try {
      await addDoc(collection(db, collection1), doc);
    } catch (err) {
      error.value = err;
    }
  };

  return { error, addDoc1 };
};

export default useCollection;
