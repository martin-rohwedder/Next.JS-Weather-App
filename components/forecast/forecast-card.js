import Image from "next/image";

function ForecastCard(props) {
  const { hasVerticalLine, weekday } = props;

  return (
    <div className="flex">
      <div className="w-96 flex flex-col items-center">
        <h1 className="uppercase text-4xl font-medium">{weekday.name}</h1>
        <p className="text-lg">{weekday.formattedDate}</p>
        <Image
          src="/images/weather/animated/rainy-1.svg"
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
            <p className="text-4xl font-medium">
              21&deg;<span className="text-5xl">/</span>
              <span className="text-4xl">12&deg;</span>
            </p>
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
            <p className="ml-2 text-lg font-medium">7 m/s</p>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/weather/icons/drop.svg"
              alt="Temperature"
              width={38}
              height={38}
            />
            <p className="ml-2 text-lg font-medium">2,8 mm</p>
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
