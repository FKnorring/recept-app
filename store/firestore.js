import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

import env from "../.env.json";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const config = env.env;

const firebaseConfig = {
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  projectId: config.PROJECT_ID,
  storageBucket: config.STORAGE_BUCKET,
  messagingSenderId: config.MESSAGING_SENDER_ID,
  appId: config.APP_ID,
  measurementId: config.MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const signOut = () => auth.signOut();

const recipes = collection(db, "recipes");

export const addRecipe = async (recipe) => {
  const doc = await addDoc(recipes, recipe);
  return doc;
};

export const getRecipes = async () => {
  const snapshot = await getDocs(recipes);
  return snapshot.docs.map((doc) => doc.data());
};

export const uploadImage = (image) => {
  const imageRef = ref(storage, `images/${image.name}`);
  return uploadBytesResumable(imageRef, image);
};
