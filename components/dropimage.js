//import react and other dependencies
import React, { useState } from "react";

import { FileUploader } from "react-drag-drop-files";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { getDownloadURL } from "firebase/storage";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { uploadImage } from "../store/firestore";

const NoFile = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <FontAwesomeIcon icon={solid("camera")} size="2x" />
      <p className="my-2 text-center text-primary-800">
        Ladda upp din bild här
      </p>
    </div>
  );
};

const UploadedImage = ({ image, url }) => {
  return (
    <Image
      className="rounded-lg m-0 p-0"
      width={200}
      height={200}
      src={url}
      alt={image.name}
      objectFit="cover"
    />
  );
};

const DropImage = ({ noFile = <NoFile />, imgUrl, setImgUrl }) => {
  const [image, setImage] = useState(null);

  const handleImageFile = (file) => {
    const image = file;
    setImage(image);
    if (!image.name) return;
    const uploadTask = uploadImage(image);
    uploadTask.then((snapshot) => {
      getDownloadURL(uploadTask.snapshot.ref)
        .then((url) => {
          setImgUrl(url);
        })
        .catch((error) => {
          alert(error);
        });
    });
  };

  return (
    <FileUploader
      handleChange={handleImageFile}
      name="file"
      types={["jpg", "jpeg", "png"]}
      label="Lägg till bild"
      classes="drop-area"
    >
      {imgUrl ? <UploadedImage image={image} url={imgUrl} /> : noFile}
    </FileUploader>
  );
};

export default DropImage;
