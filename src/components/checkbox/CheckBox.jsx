import styles from "./CheckBox.module.css";
import chevron from "../../assets/images/chevron-right.svg";
import { UseForm } from "../../context/useFormContext";

export default function CheckBox() {
  const {
    toggleInactive,
    toggleActive,
    isStatus,
    activeChecked,
    inactiveChecked,
    isGender,
    handleGender,
    handleStatus,
    femaleChecked,
    maleChecked,
    toggleFemale,
    toggleMale,
    isFilterActive,
  } = UseForm();

  return (
    <div>
      {isFilterActive ? (
        <div className={styles.checkBox}>
          <div className={styles.status} onClick={handleStatus}>
            <img src={chevron} />
            <p>სტუდენტის სტატუსი</p>
          </div>
          {isStatus ? (
            <div>
              <label className="container">
                ACTIVE
                <input
                  type="checkbox"
                  checked={activeChecked}
                  onChange={toggleActive}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                INACTIVE
                <input
                  type="checkbox"
                  checked={inactiveChecked}
                  onChange={toggleInactive}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          ) : null}
          <div className={styles.gender} onClick={handleGender}>
            <img src={chevron} />
            <span>სქესი</span>
          </div>
          {isGender ? (
            <>
              <label className="container">
                MALE
                <input
                  type="checkbox"
                  checked={maleChecked}
                  onChange={toggleMale}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                FEMALE
                <input
                  type="checkbox"
                  checked={femaleChecked}
                  onChange={toggleFemale}
                />
                <span className="checkmark"></span>
              </label>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
