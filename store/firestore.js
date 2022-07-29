import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { async } from "@firebase/util";
import { db } from "./firebase";

const recipes = collection(db, "recipes");

const groups = collection(db, "groups");

const users = collection(db, "users");

export const addUser = async (uid, user) => {
  return await setDoc(doc(db, "users", uid), user);
};

export const getUser = async (uid) => {
  const docRef = doc(db, `users/${uid}`);
  return await getDoc(docRef);
};

export const getGroup = async (gid) => {
  const docRef = doc(db, `groups/${gid}`);
  return await getDoc(docRef);
};

export const getUserGroups = async (groups) => {
  if (groups === undefined) return undefined;
  const groupRefs = Promise.all(groups.map(getGroup));
  return await groupRefs;
};

export const getGroupRecipes = async (recipes) => {
  if (recipes === undefined) return undefined;
  const recipeRefs = Promise.all(recipes.map(getRecipe));
  return await recipeRefs;
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
  const docRef = await getDocs(groups);
  return docRef.docs;
};

export const addUserToGroup = async (uid, gid) => {
  const [user, group] = await Promise.all([getUser(uid), getGroup(gid)]);
  const [userGroups, groupMembers] = [user.data().groups, group.data().members];
  userGroups.push(gid);
  groupMembers.push(uid);
  return await Promise.all([
    updateDoc(doc(db, `users/${uid}`), { groups: userGroups }),
    updateDoc(doc(db, `groups/${gid}`), { members: groupMembers }),
  ]);
};
