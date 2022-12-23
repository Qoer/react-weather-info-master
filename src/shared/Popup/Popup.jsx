import React from "react";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { ThisDayItem } from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import { useCustomSelector } from "../../hooks/store";
import { selectCurrentWeatherData } from "../../store/selectors";
import s from "./Popup.module.scss";

export const Popup = ({ click, setClick, forecast, city, cardInfo }) => {
  String.prototype.firstLetterToUppercase = function () {
    return this[0].toUpperCase() + this.slice(1);
  };

  const { weather } = useCustomSelector(selectCurrentWeatherData);

  const time = weather.dt;
  const date = new Date(+time * 1000);
  const res = [date.getHours(), date.getMinutes()]
    .map(function (x) {
      return x < 10 ? "0" + x : x;
    })
    .join(":");

  const days = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${cardInfo.temp_day}° - ощущается как ${cardInfo.temp_night}°`,
    },
    {
      icon_id: "pressure1",
      name: "Давление",
      value: `${cardInfo.pressure} мм ртутного столба - нормальное`,
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: `${cardInfo.info}`,
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${cardInfo.wind} м/с юго-запад - легкий ветер`,
    },
  ];
  return (
    <div style={click === "block" ? { display: "block" } : { display: "none" }}>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>{`${Math.round(
            forecast.daily[0].temp.day
          )}°`}</div>
          <div className={s.day__name}>{cardInfo.day}</div>
          <div className={s.img}>
            <GlobalSvgSelector id={cardInfo.icon_id} />
          </div>
          <div className={s.day__time}>
            Время: <span>{res}</span>
          </div>
          <div className={s.day__city}>
            Город: <span>{city.q}</span>
          </div>
        </div>
        <div className={s.this__day_info_items}>
          {days.map((item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close} onClick={() => setClick("none")}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </div>
  );
};
