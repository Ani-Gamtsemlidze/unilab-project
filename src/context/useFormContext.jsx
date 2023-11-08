import { createContext, useContext, useState } from "react";

export const formThemeContext = createContext();
function UseFormContext(props) {
  const [isStatus, setIsStatus] = useState(true);
  const [isGender, setIsGender] = useState(false);

  const [inactiveChecked, setInactiveChecked] = useState(true);
  const [activeChecked, setActiveChecked] = useState(true);

  const [femaleChecked, setFemaleChecked] = useState(true);
  const [maleChecked, setMaleChecked] = useState(true);

  const [isFilterActive, setIsFilterActive] = useState(false);

  const toggleInactive = () => {
    setInactiveChecked(!inactiveChecked);
  };

  const toggleActive = () => {
    setActiveChecked(!activeChecked);
  };

  const toggleFemale = () => {
    setFemaleChecked(!femaleChecked);
  };
  const toggleMale = () => {
    setMaleChecked(!maleChecked);
  };

  function handleStatus() {
    setIsStatus(!isStatus);
  }
  function handleGender() {
    setIsGender(!isGender);
  }

  function handleFilterActive() {
    setIsFilterActive(!isFilterActive);
  }

  return (
    <formThemeContext.Provider
      value={{
        isFilterActive,
        setIsFilterActive,
        handleFilterActive,
        toggleActive,
        isStatus,
        isGender,
        inactiveChecked,
        femaleChecked,
        maleChecked,
        activeChecked,
        toggleInactive,
        toggleFemale,
        toggleMale,
        handleStatus,
        handleGender,
      }}
    >
      {props.children}
    </formThemeContext.Provider>
  );
}

function UseForm() {
  const context = useContext(formThemeContext);
  if (context === undefined) throw new Error("error");
  return context;
}

export { UseFormContext, UseForm };
