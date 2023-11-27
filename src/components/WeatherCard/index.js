/* Import */
import { useState, useEffect } from 'react';
import { VCROS_API_URL, VCROS_API_KEY, hourlyResponsive } from "../Data";
import Carousel from 'react-multi-carousel';
import CurrentWeather from '../CurrentWeather';
import HourlyWeather from '../CurrentWeather/HourlyWeather';
import 'react-multi-carousel/lib/styles.css';

/* Weather component */
const WeatherCard = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState({
    unit: 'metric',
    currentDate: '',
    location: 'Brisbane,AU',
    address: '',
    imgName: '',
    currentTemp: '',
    lowestTemp: '',
    highestTemp: '',
    pressure: '',
    humidity: '',
    hourlyTemp: [],
    error: false,
    errorMessage: '',
  });

  useEffect(() => {
    const fetchWeatherData = async () => {
      const { unit, location } = currentWeatherData;
      const endpoint = `${location}?unitGroup=${unit}&key=${VCROS_API_KEY}`;
      const url = `${VCROS_API_URL}/${endpoint}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw response;
        }

        const data = await response.json();

        console.log('data', data);

        setCurrentWeatherData({
          ...currentWeatherData,
          error: false,
          currentDate: data.days[0]?.datetime,
          address: data.resolvedAddress,
          imgName: data.currentConditions?.icon,
          currentTemp: data.currentConditions?.temp,
          lowestTemp: data.days[0]?.tempmin,
          highestTemp: data.days[0]?.tempmax,
          pressure: data.days[0]?.pressure,
          humidity: data.days[0]?.humidity,
          hourlyTemp: data.days[0]?.hours || [],
        });
      } catch (error) {
        setCurrentWeatherData({
          ...currentWeatherData,
          error: true,
          errorMessage: 'An error occurred while fetching weather details. Please try again later.',
        });
      }
    }
    fetchWeatherData();
  }, []);

  return (
    <>
      <h2>Current Weather</h2>
      {/* <button onClick={fetchWeatherData}>Click me!</button> */}
      {currentWeatherData.error ? (
        <p className="error-message">{currentWeatherData.errorMessage}</p>
      ) : (
        <>
          <CurrentWeather
            currentDate={currentWeatherData.currentDate}
            address={currentWeatherData.address}
            imgName={currentWeatherData.imgName}
            currentTemp={currentWeatherData.currentTemp}
            lowestTemp={currentWeatherData.lowestTemp}
            highestTemp={currentWeatherData.highestTemp}
            pressure={currentWeatherData.pressure}
            humidity={currentWeatherData.humidity}
            hourlyTemps={currentWeatherData.hourlyTemps}
          />
          <section className="hourly-weather">
            {currentWeatherData.hourlyTemp && (<Carousel responsive={hourlyResponsive} arrows={true} swipeable={true} draggable={true}>
              {currentWeatherData.hourlyTemp.map((hour, index) => 
                <HourlyWeather key={index} hourlyTemp={hour.temp} hourlyTime={hour.datetimeEpoch} hourlyImgName={hour.icon} />
              )}
            </Carousel>)}
          </section>
        </>
      )}
    </>
  );
}

export default WeatherCard;
