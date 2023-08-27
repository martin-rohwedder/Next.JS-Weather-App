import ForecastCard from "./forecast-card";

function ForecastContainer() {
  function getWeekday({ daysInFuture }) {
    const dateInFuture = new Date();
    dateInFuture.setDate(dateInFuture.getDate() + daysInFuture);

    const name = dateInFuture.toLocaleDateString("da-DK", {
      weekday: "long",
    });

    const formattedDate = dateInFuture.toLocaleDateString("da-DK");

    return { name, formattedDate };
  }

  return (
    <section className="md:w-4/6 w-full flex justify-center">
      <div className="grid md:grid-cols-5 grid-cols-1 gap-4 bg-slate-100 p-4 rounded-lg shadow opacity-90 text-slate-800">
        <ForecastCard
          hasVerticalLine={true}
          weekday={getWeekday({ daysInFuture: 0 })}
        />
        <ForecastCard
          hasVerticalLine={true}
          weekday={getWeekday({ daysInFuture: 1 })}
        />
        <ForecastCard
          hasVerticalLine={true}
          weekday={getWeekday({ daysInFuture: 2 })}
        />
        <ForecastCard
          hasVerticalLine={true}
          weekday={getWeekday({ daysInFuture: 3 })}
        />
        <ForecastCard
          hasVerticalLine={false}
          weekday={getWeekday({ daysInFuture: 4 })}
        />
      </div>
    </section>
  );
}

export default ForecastContainer;
