/* Imports */
import Header from "../Header";
import WeatherCard from "../WeatherCard";

/* About page component */
const Weather = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <h1>Weather</h1>
                    <WeatherCard />
                </div>
            </main>
        </>
    )
}

export default Weather;
