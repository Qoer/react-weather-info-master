import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import s from "./Days.module.scss";

export const Card = ({ day, setClick, setCardInfo }) => {
  return (
    <div
      className={s.card}
      onClick={() => {
        setClick("block");
        setCardInfo(day);
      }}
    >
      <div className={s.day}>{day.day}</div>
      <div className={s.day__info}>{day.day_info}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={day.icon_id} />
      </div>
      <div className={s.temp__day}>
        {`${day.temp_day}`.substring(0, 1) === "-"
          ? day.temp_day
          : "+" + day.temp_day}
      </div>
      <div className={s.temp__night}>
        {`${day.temp_night}`.substring(0, 1) === "-"
          ? day.temp_night
          : "+" + day.temp_night}
      </div>
      <div className={s.info}>{day.info}</div>
    </div>
  );
};
