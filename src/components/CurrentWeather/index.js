/* Import */
import { dayNames, months } from "../Data";
import "./styles.css";

/* Component */
const CurrentWeather = ({
  currentDate,
  address,
  imgName,
  currentTemp,
  lowestTemp,
  highestTemp,
  pressure,
  humidity,
  unit
}) => {
  let today = new Date(currentDate);
  const day = today.getDay();
  const month = today.getMonth();
  today = `${dayNames[day]}, ${months[month]} ${today.getDate()} ${today.getFullYear()}`;

  return (
    <>
      <p><time dateTime={currentDate}>{today}</time></p>
      <address>
        <span className="material-symbols-outlined">location_city</span>
        {address}
      </address>
      <figure><img src={`images/${imgName}.svg`} alt={imgName} width="160" /></figure>
      <div className="current-temp">{currentTemp}&deg;{unit === 'metric' ? 'C' : 'F'}</div>
      <dl className="temps">
        <div className="lowest">
          <dt>Low</dt>
          <dd>{lowestTemp}</dd>
        </div>
        <div className="highest">
          <dt>High</dt>
          <dd>{highestTemp}</dd>
        </div>
      </dl>
      <dl className="other">
        <div className="pressure">
          <dt>Pressure</dt>
          <dd>{pressure}</dd>
        </div>
        <div className="humidity">
          <dt>Humidity</dt>
          <dd>{humidity}</dd>
        </div>
      </dl>
    </>
  )
}

export default CurrentWeather;
