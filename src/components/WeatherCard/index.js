/* Import */
import { useState, useEffect } from 'react';
import { VCROS_API_URL, VCROS_API_KEY, hourlyResponsive } from "../Data";
import Carousel from 'react-multi-carousel';
import WeeklyWeather from '../WeeklyWeather';
import CurrentWeather from '../CurrentWeather';
import HourlyWeather from '../CurrentWeather/HourlyWeather';
import SearchForm from '../Actions/SearchForm';
import InputToggle from '../Actions/InputToggle';
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
    wind: '',
    pressure: '',
    humidity: '',
    hourlyTemp: [],
    currentHour: 0,
    error: false,
    errorMessage: '',
  });

  const [weeklyWeatherData, setWeeklyWeatherData] = useState([]);

  // Update the location in the state and trigger a new fetch
  const handleSearchSubmit = (newLocation) => {
    setCurrentWeatherData({
      ...currentWeatherData,
      location: newLocation,
    });
  };

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
          wind: data.currentConditions?.windgust,
          pressure: data.days[0]?.pressure,
          humidity: data.days[0]?.humidity,
          hourlyTemp: data.days[0]?.hours || [],
          currentHour: new Date().getHours(),
        });

        setWeeklyWeatherData(data.days);
      } catch (error) {
        setCurrentWeatherData({
          ...currentWeatherData,
          error: true,
          errorMessage: 'An error occurred while fetching weather details. Please try again later.',
        });
      }
    }
    fetchWeatherData();
  }, [currentWeatherData.unit, currentWeatherData.location]);

  // Used to switch between metric (Degrees) and us (Fahrenheit)
  const handleToggleUnit = (newUnit) => {
    setCurrentWeatherData({
      ...currentWeatherData,
      unit: newUnit,
    });
  };

  return (
    <>
      {/* <button onClick={fetchWeatherData}>Click me!</button> */}
      {currentWeatherData.error ? (
        <p className="error-message">{currentWeatherData.errorMessage}</p>
      ) : (
        <>
          <div className="col-left">
            <h2>Current Weather</h2>
            <section className="location-search">
              <SearchForm onSubmit={handleSearchSubmit} />
            </section>
            <section className="current-weather-card" style={{ backgroundImage: "url(images/brisbane-buildings-outlined-day.jpg)" }}>
              <InputToggle unit={currentWeatherData.unit} onChange={handleToggleUnit} />
              <CurrentWeather
                currentDate={currentWeatherData.currentDate}
                address={currentWeatherData.address}
                imgName={currentWeatherData.imgName}
                currentTemp={currentWeatherData.currentTemp}
                lowestTemp={currentWeatherData.lowestTemp}
                highestTemp={currentWeatherData.highestTemp}
                wind={currentWeatherData.wind}
                pressure={currentWeatherData.pressure}
                humidity={currentWeatherData.humidity}
                unit={currentWeatherData.unit}
                hourlyTemps={currentWeatherData.hourlyTemps}
              />
            </section>
            <section className="hourly-weather">
              {currentWeatherData.hourlyTemp && (<Carousel
                responsive={hourlyResponsive}
                infinite={true}
                arrows={true}
                swipeable={true}
                draggable={true}
                centerMode={true}
                additionalTransfrom={-currentWeatherData.currentHour * (100 / 1.075)}>
                {currentWeatherData.hourlyTemp.map((hour, index) => 
                  <HourlyWeather key={index} hourlyTemp={hour.temp} hourlyTime={hour.datetimeEpoch} hourlyImgName={hour.icon} unit={currentWeatherData.unit} />
                )}
              </Carousel>)}
            </section>
          </div>
          <aside className="sidebar">
            <h2>Weekly Weather</h2>
            <section className="weekly-weather">
              {console.log('weeklyWeatherData', weeklyWeatherData.slice(0, 7))}
              {weeklyWeatherData.slice(0, 7).map((day, index) => 
                <WeeklyWeather
                  key={index}
                  day={day.datetime}
                  dailyLowTemp={day.tempmin}
                  dailyHighTemp={day.tempmax}
                  dailyImgName={day.icon}
                  unit={currentWeatherData.unit}
                />
              )}
            </section>
          </aside>
        </>
      )}
    </>
  );
}

export default WeatherCard;
