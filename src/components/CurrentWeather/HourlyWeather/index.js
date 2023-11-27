/* Import */
import "./styles.css";

/* HourlyWeather component */
const HourlyWeather = ({
  hourlyTime,
  hourlyImgName,
  hourlyTemp,
  unit
}) => {
  const unixTimestamp = hourlyTime;
  const timestamp = unixTimestamp * 1000;
  let time = new Date(timestamp);
  time = time.getHours();
  let now = Date.now();
  now = new Date(now).getHours();
  const imgCurrent = time !== now ? `images/${hourlyImgName}-dark.svg` : `images/${hourlyImgName}.svg`;
  
  return (
      <div className={`hourly-temps${time !== now ? '' : ' current'}`}>
        <p>{time !== now ? time : 'Now'}</p>
        <figure><img src={imgCurrent} alt={hourlyImgName} width="55" /></figure>
        <p className="current-temp">{hourlyTemp}&deg;{unit === 'metric' ? 'C' : 'F'}</p>
      </div>
  );
}

export default HourlyWeather;
