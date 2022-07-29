import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  Collapse,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { addUser, getUser } from "../store/firestore";

import DropImage from "../components/dropimage";
import { auth } from "../store/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const CreateProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [wait, setWait] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const filled = name && imgUrl;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && filled) {
      setWait(true);
      addUser(user.uid, { name: name, imgurl: imgUrl })
        .then((userInfo) => {
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
          setOpen(true);
        });
    }
  };

  return (
    <>
      <Backdrop open={wait}>
        <CircularProgress />
      </Backdrop>
      <form
        onSubmit={handleSubmit}
        className="h-screen w-screen flex centered signup"
      >
        <Typography className="displayfont" variant="h4">
          Skapa din profil
        </Typography>
        <FormHelperText>Ladda upp en bild för din profil</FormHelperText>
        <DropImage imgUrl={imgUrl} setImgUrl={setImgUrl} />
        <TextField
          label="Namn"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={!filled}
          color="success"
        >
          Skapa konto
        </Button>
        <Collapse in={open}>
          <Alert onClose={() => setOpen(false)} severity="error">
            Profil kunde inte skapas
          </Alert>
        </Collapse>
      </form>
    </>
  );
};

export default CreateProfile;
