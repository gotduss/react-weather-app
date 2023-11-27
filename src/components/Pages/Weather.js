/* Imports */
import Header from "../Header";
import WeatherCard from "../WeatherCard";

/* About page component */
const Weather = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Weather</h1>
                <WeatherCard />
            </main>
        </>
    )
}

export default Weather;
