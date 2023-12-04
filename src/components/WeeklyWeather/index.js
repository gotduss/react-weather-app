/* Imports */
import { dayNames } from "../Data";
import "./styles.css";

/* WeeklyWeather component */
const WeeklyWeather = ({
  day,
  dailyImgName,
  dailyLowTemp,
  dailyHighTemp,
  unit,
}) => {
  const date = new Date(day);
  let weekDay = date.getDay();
  weekDay = dayNames[weekDay];

  let today = Date.now();
  today = new Date(today).getDay();
  today = dayNames[today];

  const imgCurrent = weekDay !== today ? `images/${dailyImgName}-dark.svg` : `images/${dailyImgName}.svg`;

  return (
    <div className={`weekly-temps${weekDay !== today ? '' : ' today'}`}>
      <p className="weekday">{weekDay !== today ? weekDay : 'Today'}</p>
      <figure><img src={imgCurrent} alt={dailyImgName} width="55" /></figure>
      <dl className="temps">
        <div className="lowest">
          <dt>Low</dt>
          <dd>{dailyLowTemp}&deg;{unit === 'metric' ? 'C' : 'F'}</dd>
        </div>
        <div className="highest">
          <dt>High</dt>
          <dd>{dailyHighTemp}&deg;{unit === 'metric' ? 'C' : 'F'}</dd>
        </div>
      </dl>
    </div>
  )
}

export default WeeklyWeather;
