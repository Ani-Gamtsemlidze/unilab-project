import uploadPhotoIcon from "../../../assets/images/add_photo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import styles from "./Authentication.module.css";

/**
 * in this code user enter information and if both of them is entered
 *
 * */
export default function Authentication() {
  const [isUserImage, setIsUserImage] = useState(false);
  const [isInfoEntered, setIsInfoEntered] = useState(false);
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState(
    localStorage.getItem("userImage") || uploadPhotoIcon
  );
  const navigate = useNavigate();
  const userNameRef = useRef();
  const userImageRef = useRef();

  const enteredName = userNameRef.current?.value;
  const enteredImage = userImageRef.current?.value;

  useEffect(() => {
    setIsInfoEntered(userName && enteredImage);
  }, [userName, enteredImage]);

  function handleImageChange(e) {
    if (userImageRef.current) {
      const file = e.target.files[0];
      const imgUrl = URL.createObjectURL(file);
      setIsUserImage(true);
      setUserImage(imgUrl);
    }
  }

  function handleNameInput(e) {
    setUserName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("name", enteredName);
    localStorage.setItem("userImage", enteredImage);
    setIsInfoEntered(false);
    if (enteredName && enteredImage) {
      setIsInfoEntered(true);
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
        <input
          id="file"
          type="file"
          onChange={handleImageChange}
          ref={userImageRef}
        />
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
        ref={userNameRef}
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
