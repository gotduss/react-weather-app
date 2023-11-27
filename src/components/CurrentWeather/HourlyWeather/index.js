/* Import */
import "./styles.css";

/* HourlyWeather component */
const HourlyWeather = ({
  hourlyTime,
  hourlyImgName,
  hourlyTemp
}) => {
  const unixTimestamp = hourlyTime;
  const timestamp = unixTimestamp * 1000;
  let time = new Date(timestamp);
  time = time.getHours();
  let now = Date.now();
  now = new Date(now).getHours();
  
  return (
      <div className={`hourly-temps${time !== now ? '' : ' current'}`}>
        <p>{time !== now ? time : 'Now'}</p>
        <figure><img src={`images/${hourlyImgName}-dark.svg`} alt={hourlyImgName} width="55" /></figure>
        <p>{hourlyTemp}&deg;C</p>
      </div>
  );
}

export default HourlyWeather;
