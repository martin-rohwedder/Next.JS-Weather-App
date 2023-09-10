import Image from "next/image";
import { useEffect, useState } from "react";

function ForecastCard(props) {
  const { hasVerticalLine, weekday } = props;
  const { main, wind, rain, weather, clouds } = props.weatherData;

  const [weatherImage, setWeatherImage] = useState();

  useEffect(() => {
    getWeatherIcon();
  });

  function getWeatherIcon() {
    const weatherId = weather[0].id;

    // Thunderstorm
    if (weatherId > 199 && weatherId < 233) {
      setWeatherImage("thunder.svg");
    }
    // Drizzle
    else if (weatherId > 299 && weatherId < 322) {
      if (clouds.all < 20) {
        setWeatherImage("rainy-2.svg");
      } else if (clouds.all > 20 && clouds.all < 60) {
        setWeatherImage("rainy-3.svg");
      } else {
        setWeatherImage("rainy-4.svg");
      }
    }
    // Rain
    else if (weatherId > 499 && weatherId < 532) {
      if (clouds.all < 40) {
        setWeatherImage("rainy-1.svg");
      } else if (clouds.all > 40 && clouds.all < 60) {
        setWeatherImage("rainy-5.svg");
      } else {
        setWeatherImage("rainy-6.svg");
      }
    }
    // Snow
    else if (weatherId > 599 && weatherId < 623) {
      if (clouds.all < 20) {
        setWeatherImage("snowy-1.svg");
      } else if (clouds.all > 40 && clouds.all < 60) {
        setWeatherImage("snowy-5.svg");
      } else {
        setWeatherImage("snowy-6.svg");
      }
    }
    // Atmosphere (Fog, mist, dust etc.)
    else if (weatherId > 699 && weatherId < 782) {
      setWeatherImage("cloudy.svg");
    }
    // Clear Skies
    else if (weatherId === 800) {
      if (weather[0].icon.includes("d")) {
        setWeatherImage("day.svg");
      } else {
        setWeatherImage("night.svg");
      }
    }
    // Clouds
    else if (weatherId > 800 && weatherId < 805) {
      if (clouds.all < 50) {
        if (weather[0].icon.includes("d")) {
          setWeatherImage("cloudy-day-2.svg");
        } else {
          setWeatherImage("cloudy-night-2.svg");
        }
      } else {
        setWeatherImage("cloudy.svg");
      }
    }
  }

  return (
    <div className="flex">
      <div className="w-96 flex flex-col items-center">
        <h1 className="uppercase text-4xl font-medium">{weekday.name}</h1>
        <p className="text-lg">{weekday.formattedDate}</p>
        <Image
          src={`/images/weather/animated/${weatherImage}`}
          alt="Weather Icon"
          height={200}
          width={200}
        />
        <div className="flex justify-center items-center w-full p-2">
          <div className="flex items-center">
            <Image
              src="/images/weather/icons/temperature.svg"
              alt="Temperature"
              width={85}
              height={85}
            />
          </div>
          <div className="flex items-center">
            {/* <p className="text-4xl font-medium">
              {Math.round(main.temp_max)}&deg;
              <span className="text-5xl">/</span>
              <span className="text-4xl">{Math.round(main.temp_min)}&deg;</span>
            </p> */}
            <p className="text-6xl font-medium">{Math.round(main.temp)}&deg;</p>
          </div>
        </div>
        <div className="flex justify-evenly items-center w-full p-2">
          <div className="flex items-center">
            <Image
              src="/images/weather/icons/wind.svg"
              alt="Temperature"
              width={38}
              height={38}
            />
            <p className="ml-2 text-lg font-medium">
              {Math.round(wind.speed)} m/s
            </p>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/weather/icons/drop.svg"
              alt="Temperature"
              width={38}
              height={38}
            />
            <p className="ml-2 text-lg font-medium">
              {rain === undefined ? "0" : Math.round(rain["3h"])} mm
            </p>
          </div>
        </div>
      </div>
      {hasVerticalLine && (
        <span className="inline-block w-0.5 self-stretch bg-slate-200 opacity-100"></span>
      )}
    </div>
  );
}

export default ForecastCard;
