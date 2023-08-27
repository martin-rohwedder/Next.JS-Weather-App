import ExtraWeatherTodayCard from "./extra-weather-today-card";

function ExtraWeatherTodayContainer() {
  return (
    <section className="w-1/2 flex justify-evenly my-12">
      <ExtraWeatherTodayCard
        id="luftfugtighed"
        title="luftfugtighed"
        image="humidity.svg"
        text="72 %"
      />
      <ExtraWeatherTodayCard
        id="vind retning"
        title="vind retning"
        image="arrow-up.svg"
        text="Nordøst"
        rotationDegree={25}
      />
      <ExtraWeatherTodayCard
        id="sol"
        title="sol op / sol ned"
        image="sunrise.svg"
        text="Op: 06:45 / Ned: 21:23"
        sunriseTime="06:45"
        sunsetTime="21:23"
      />
    </section>
  );
}

export default ExtraWeatherTodayContainer;
