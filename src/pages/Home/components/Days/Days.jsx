import { Card } from "./Card";
import s from "./Days.module.scss";
import { Tabs } from "./Tabs";

export const Days = ({ items, setClick, setCardInfo }) => {
  const monthNames = [
    "янв",
    "февр",
    "март",
    "апр",
    "мая",
    "июня",
    "июля",
    "авг",
    "сент",
    "окт",
    "нояб",
    "дек",
  ];

  String.prototype.firstLetterToUppercase = function () {
    return this[0].toUpperCase() + this.slice(1);
  };

  const days = [
    {
      day: "Сегодня",
      day_info: `${new Date(items[0].dt * 1000).getDate()} ${
        monthNames[new Date(items[0].dt * 1000).getMonth()]
      }`,
      icon_id: items[0].weather[0].main,
      temp_day: `${Math.round(items[0].temp.max)}`,
      temp_night: `${Math.round(items[0].temp.min)}`,
      info: items[0].weather[0].description.firstLetterToUppercase(),
      pressure: Math.round(items[0].pressure * 0.75),
      wind: items[0].wind_speed,
    },
    {
      day: "Завтра",
      day_info: `${new Date(items[1].dt * 1000).getDate()} ${
        monthNames[new Date(items[1].dt * 1000).getMonth()]
      }`,
      icon_id: items[1].weather[0].main,
      temp_day: `${Math.round(items[1].temp.max)}`,
      temp_night: `${Math.round(items[1].temp.min)}`,
      info: items[1].weather[0].description.firstLetterToUppercase(),
      pressure: Math.round(items[1].pressure * 0.75),
      wind: items[1].wind_speed,
    },
    {
      day: new Date(items[2].dt * 1000)
        .toLocaleString("ru", { weekday: "long" })
        .firstLetterToUppercase(),
      day_info: `${new Date(items[2].dt * 1000).getDate()} ${
        monthNames[new Date(items[2].dt * 1000).getMonth()]
      }`,
      icon_id: items[2].weather[0].main,
      temp_day: `${Math.round(items[2].temp.max)}`,
      temp_night: `${Math.round(items[2].temp.min)}`,
      info: items[2].weather[0].description.firstLetterToUppercase(),
      pressure: Math.round(items[2].pressure * 0.75),
      wind: items[2].wind_speed,
    },
    {
      day: new Date(items[3].dt * 1000)
        .toLocaleString("ru", { weekday: "long" })
        .firstLetterToUppercase(),
      day_info: `${new Date(items[3].dt * 1000).getDate()} ${
        monthNames[new Date(items[3].dt * 1000).getMonth()]
      }`,
      icon_id: items[3].weather[0].main,
      temp_day: `${Math.round(items[3].temp.max)}`,
      temp_night: `${Math.round(items[3].temp.min)}`,
      info: items[3].weather[0].description.firstLetterToUppercase(),
      pressure: Math.round(items[3].pressure * 0.75),
      wind: items[3].wind_speed,
    },
    {
      day: new Date(items[4].dt * 1000)
        .toLocaleString("ru", { weekday: "long" })
        .firstLetterToUppercase(),
      day_info: `${new Date(items[4].dt * 1000).getDate()} ${
        monthNames[new Date(items[4].dt * 1000).getMonth()]
      }`,
      icon_id: items[4].weather[0].main,
      temp_day: `${Math.round(items[4].temp.max)}`,
      temp_night: `${Math.round(items[4].temp.min)}`,
      info: items[4].weather[0].description.firstLetterToUppercase(),
      pressure: Math.round(items[4].pressure * 0.75),
      wind: items[4].wind_speed,
    },
    {
      day: new Date(items[5].dt * 1000)
        .toLocaleString("ru", { weekday: "long" })
        .firstLetterToUppercase(),
      day_info: `${new Date(items[5].dt * 1000).getDate()} ${
        monthNames[new Date(items[5].dt * 1000).getMonth()]
      }`,
      icon_id: items[5].weather[0].main,
      temp_day: `${Math.round(items[5].temp.max)}`,
      temp_night: `${Math.round(items[5].temp.min)}`,
      info: items[5].weather[0].description.firstLetterToUppercase(),
      pressure: Math.round(items[5].pressure * 0.75),
      wind: items[5].wind_speed,
    },
    {
      day: new Date(items[6].dt * 1000)
        .toLocaleString("ru", { weekday: "long" })
        .firstLetterToUppercase(),
      day_info: `${new Date(items[6].dt * 1000).getDate()} ${
        monthNames[new Date(items[6].dt * 1000).getMonth()]
      }`,
      icon_id: items[6].weather[0].main,
      temp_day: `${Math.round(items[6].temp.max)}`,
      temp_night: `${Math.round(items[6].temp.min)}`,
      info: items[6].weather[0].description.firstLetterToUppercase(),
      pressure: Math.round(items[6].pressure * 0.75),
      wind: items[6].wind_speed,
    },
    // {
    //     day: "Удачного тебе дня :)",
    //     day_info: "",
    //     icon_id: "Cool",
    //     temp_day: "+26",
    //     temp_night: "+20",
    //     info: "Прекрасно",
    // },
  ];

  return (
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((day) => (
          <Card
            day={day}
            key={day.day}
            setClick={setClick}
            setCardInfo={setCardInfo}
          />
        ))}
      </div>
    </>
  );
};
