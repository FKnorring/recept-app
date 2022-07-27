import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

import env from "../.env.json";
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

export const signout = () => signOut(auth);

const recipes = collection(db, "recipes");

const groups = collection(db, "groups");

const users = collection(db, "users");

export const addUser = async (user) => {
  return await addDoc(users, user);
};

export const getUser = async (uid) => {
  const docRef = doc(db, `users/${uid}`);
  return await getDoc(docRef);
};

export const addRecipe = async (recipe) => {
  return await addDoc(recipes, recipe);
};

export const getRecipes = async () => {
  const snapshot = await getDocs(recipes);
  return snapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

export const getRecipe = async (id) => {
  const docRef = doc(db, `recipes/${id}`);
  return await getDoc(docRef, id);
};

export const uploadImage = (image) => {
  const imageRef = ref(storage, `images/${image.name}`);
  return uploadBytesResumable(imageRef, image);
};

export const addGroup = async (group) => {
  return await addDoc(groups, group);
};

export const joinGroup = async (groupId, userId) => {
  const group = await getDoc(groups, groupId);
  const users = group.data().users;
  if (!users.includes(userId)) {
    users.push(userId);
    await group.update({ users });
  }
};

export const getGroups = async () => {
  const snapshot = await getDocs(groups);
  return snapshot.docs.map((doc) => doc.data());
};
