import ForecastContainer from "@/components/forecast/forecast-container";

function Home() {
  return (
    <main className="flex-1">
      <div className="h-full flex flex-col justify-center items-center">
        <ForecastContainer />
      </div>
    </main>
  );
}

export default Home;
