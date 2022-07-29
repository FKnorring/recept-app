//import react and other dependencies
import React, { useState } from "react";

import { CircularProgress } from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { getDownloadURL } from "firebase/storage";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { uploadImage } from "../store/storage";

const NoFile = () => {
  return (
    <div className="">
      <FontAwesomeIcon icon={solid("camera")} size="2x" />
    </div>
  );
};

const UploadedImage = ({ image, url }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <CircularProgress />}
      <Image
        onLoadingComplete={() => setLoading(false)}
        className="rounded-full"
        width={loading ? 0 : 200}
        height={loading ? 0 : 200}
        src={url}
        alt={image.name}
        objectFit="cover"
      />
    </>
  );
};

const DropImage = ({ noFile = <NoFile />, imgUrl, setImgUrl, uid = null }) => {
  const [image, setImage] = useState(null);

  const handleImageFile = (file) => {
    const image = file;
    setImage(image);
    if (!image.name) return;
    const uploadTask = uploadImage(image, uid);
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
      classes="flex justify-center items-center rounded-full w-[200px] h-[200px] bg-primary bg-opacity-25 outline-primary outline-dashed outline-2 cursor-pointer"
    >
      {imgUrl ? <UploadedImage image={image} url={imgUrl} /> : noFile}
    </FileUploader>
  );
};

export default DropImage;
