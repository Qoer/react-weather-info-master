import React from "react";
import { useEffect } from "react";
import { useCustomSelector } from "../../hooks/store";
import getFormattedWeatherData from "../../services/forecastServices";
import { selectCurrentWeatherData } from "../../store/selectors";
import { Days } from "./components/Days/Days";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";

import s from "./Home.module.scss";

export const Home = ({
  city,
  setClick,
  forecast,
  setForecast,
  setCardInfo,
}) => {
  const { weather } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...city }).then((data) => {
        setForecast(data);
      });
    };
    fetchWeather();
  }, [city]);

  return (
    weather.name !== undefined &&
    forecast !== null && (
      <div className={s.home}>
        <div className={s.wrapper}>
          <ThisDay weather={weather} />
          <ThisDayInfo weatherItem={weather} />
        </div>
        <Days
          items={forecast.daily}
          setClick={setClick}
          setCardInfo={setCardInfo}
        />
      </div>
    )
  );
};
