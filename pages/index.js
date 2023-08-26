import ForecastContainer from "@/components/forecast/forecast-container";
import LocationContainer from "@/components/location/location-container";

function Home() {
  return (
    <main className="flex-1">
      <div className="h-full flex flex-col justify-center items-center">
        <LocationContainer />
        <ForecastContainer />
      </div>
    </main>
  );
}

export default Home;
