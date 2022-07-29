import { ref, uploadBytesResumable } from "firebase/storage";

import { storage } from "./firebase";

export const uploadImage = (image, profile) => {
  const imageRef = ref(
    storage,
    `${profile ? profile : "images"}/${image.name}`
  );
  return uploadBytesResumable(imageRef, image);
};
