import ExtraWeatherTodayCard from "./extra-weather-today-card";
import arrowUpImage from "@/public/images/weather/icons/arrow-up.svg";
import humidityImage from "@/public/images/weather/icons/humidity.svg";
import sunriseImage from "@/public/images/weather/icons/sunrise.svg";

function ExtraWeatherTodayContainer(props) {
  const { forecast } = props;

  function convertUnixUTCTimeToLocal(unixUTCTime) {
    const date = new Date(unixUTCTime * 1000);

    const zeroPad = (num, places) => String(num).padStart(places, "0");
    const hours = zeroPad(date.getHours(), 2);

    const formattedTime = `${hours}:${date.getMinutes()}`;
    return formattedTime;
  }

  function getWindDirectionText() {
    const windDegree = forecast.list[0].wind.deg;

    // North
    if (windDegree > 329 && windDegree < 30) {
      return "Nord";
    }
    // North East
    else if (windDegree > 29 && windDegree < 60) {
      return "Nordøst";
    }
    // East
    else if (windDegree > 59 && windDegree < 120) {
      return "Øst";
    }
    // South East
    else if (windDegree > 119 && windDegree < 150) {
      return "Sydøst";
    }
    // South
    else if (windDegree > 149 && windDegree < 210) {
      return "Syd";
    }
    // South West
    else if (windDegree > 209 && windDegree < 240) {
      return "Sydvest";
    }
    // West
    else if (windDegree > 239 && windDegree < 300) {
      return "Vest";
    }
    // North West
    else if (windDegree > 299 && windDegree < 330) {
      return "Nordvest";
    }
  }

  return (
    <section className="w-1/2 flex justify-evenly my-12">
      <ExtraWeatherTodayCard
        id="luftfugtighed"
        title="luftfugtighed"
        image={humidityImage}
        text={`${forecast.list[0].main.humidity} %`}
      />
      <ExtraWeatherTodayCard
        id="vind retning"
        title="vind retning"
        image={arrowUpImage}
        text={getWindDirectionText()}
        rotationDegree={forecast.list[0].wind.deg}
      />
      <ExtraWeatherTodayCard
        id="sol"
        title="sol op / sol ned"
        image={sunriseImage}
        text={`Op: ${convertUnixUTCTimeToLocal(
          forecast.city.sunrise
        )} / Ned: ${convertUnixUTCTimeToLocal(forecast.city.sunset)}`}
        sunriseTime={convertUnixUTCTimeToLocal(forecast.city.sunrise)}
        sunsetTime={convertUnixUTCTimeToLocal(forecast.city.sunset)}
      />
    </section>
  );
}

export default ExtraWeatherTodayContainer;
