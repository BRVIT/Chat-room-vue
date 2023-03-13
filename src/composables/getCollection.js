import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { ref, watchEffect } from "vue";
import { db } from "../firebase/config";

const getCollection = (collection1) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = collection(db, collection1);
  const q = query(collectionRef, orderBy("createdAt"));

  const unsub = onSnapshot(q, (snapshot) => {
    let data = [];
    snapshot.docs.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    documents.value = data;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub);
  });

  return { documents, error, fetch };
};

export default getCollection;
