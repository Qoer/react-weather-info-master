import { React, useEffect, useState } from "react";
// import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { ChangeTheme } from "../../assets/icons/global/ChangeTheme";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { useCustomDispatch } from "../../hooks/store";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";

import s from "./Header.module.scss";

export const Header = ({ setCity }) => {
  const options = [
    { value: "city-1", label: "Москва" },
    { value: "city-2", label: "Красногорск" },
    { value: "city-3", label: "Ярославль" },
    { value: "city-4", label: "Санкт-Петербург" },
    { value: "city-5", label: "Владимир" },
    { value: "city-6", label: "Мурманск" },
  ];

  const [theme, setTheme] = useState("light");

  const dispatch = useCustomDispatch();

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: theme === "dark" ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles) => ({
      ...styles,
      color: theme === "dark" ? "#fff" : "#000",
    }),
  };

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    const root = document.querySelector(":root");

    const components = [
      "body-background",
      "components-background",
      "card-background",
      "card-shadow",
      "text-color",
    ];

    components.forEach((component) => {
      root.style.setProperty(
        `--${component}-default`,
        `var(--${component}-${theme})`
      );
    });
  }, [theme]);

  useEffect(() => {
    dispatch(fetchCurrentWeather("Москва"));
    // eslint-disable-next-line
  }, []);

  const handleChange = (selectedOption, actionMeta) => {
    console.log("handleChange", selectedOption, actionMeta);
  };
  const handleInputChange = (inputValue, actionMeta) => {
    console.log("handleInputChange", inputValue, actionMeta);
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <ChangeTheme id="change-theme" />
        </div>
        {/* <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}
          onChange={(x) => {
            dispatch(fetchCurrentWeather(x.label));
            setCity({ q: `${x.label}` });
          }}
        /> */}
        <CreatableSelect
          defaultValue={options[0]}
          options={options}
          onChange={(x) => {
            dispatch(fetchCurrentWeather(x.label));
            setCity({ q: `${x.label}` });
          }}
          onInputChange={handleInputChange}
          styles={colourStyles}
        />
      </div>
    </header>
  );
};
