import uploadPhotoIcon from "../../../assets/images/add_photo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import styles from "./Authentication.module.css";

export default function Authentication() {
  const [isInfoEntered, setIsInfoEntered] = useState(false);
  const [isUserImage, setIsUserImage] = useState(false);
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState(
    localStorage.getItem("userImage") || uploadPhotoIcon
  );
  const navigate = useNavigate();

  useEffect(() => {
    setIsInfoEntered(userName && isUserImage);
  }, [userName, isUserImage]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    setIsUserImage(true);
    setUserImage(imgUrl);
  }

  function handleNameInput(e) {
    setUserName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    localStorage.setItem("userImage", userImage);

    if (userName && isUserImage) {
      navigate("/form", { replace: true });
    }
  }

  return (
    <form
      name="auth"
      className={styles.authenticationForm}
      onSubmit={handleSubmit}
    >
      <label className={styles.uploadImageLabel} htmlFor="file">
        <input id="file" type="file" onChange={handleImageChange} />
        <img
          className={isUserImage ? styles.userImage : styles.uploadIcon}
          alt="upload your photo"
          src={isUserImage ? userImage : uploadPhotoIcon}
        />
      </label>
      <label className={styles.userNameLabel} htmlFor="user">
        Fill in your name
      </label>
      <input
        className={styles.userInput}
        id="user"
        type="text"
        placeholder="Your name"
        spellCheck="false"
        onChange={handleNameInput}
      />
      <button
        type="submit"
        className={isInfoEntered ? styles.submit : styles.notSubmit}
      >
        Sign In
      </button>
    </form>
  );
}
