import ExtraWeatherTodayContainer from "@/components/extra/extra-weather-today-container";
import ForecastContainer from "@/components/forecast/forecast-container";
import LocationContainer from "@/components/location/location-container";
import { useEffect, useState } from "react";
import useSWR from "swr";

function Home(props) {
  const [latitude, setLatitude] = useState("40.712776");
  const [longitude, setLongitude] = useState("-74.005974");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        // Success Callback
        async (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        }
      );
    }
  }, []);

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: forecast, isLoading } = useSWR(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${props.apiKey}&units=metric&lang=da`,
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );

  if (isLoading && !forecast) {
    return <h1>Indlæser vejrdata...</h1>;
  } else {
    console.log(forecast);
    return (
      <main className="flex-1">
        <div className="h-full flex flex-col justify-center items-center">
          <LocationContainer forecast={forecast} />
          <ForecastContainer forecast={forecast} />
          <ExtraWeatherTodayContainer forecast={forecast} />
        </div>
      </main>
    );
  }
}

export async function getStaticProps() {
  const apiKey = process.env.WEATHER_API_KEY;

  return {
    props: {
      apiKey: apiKey,
    },
  };
}

export default Home;
