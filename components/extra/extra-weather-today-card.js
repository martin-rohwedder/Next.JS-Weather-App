import Image from "next/image";
import arrowUpImage from "@/public/images/weather/icons/arrow-up.svg";

function ExtraWeatherTodayCard(props) {
  const { id, title, image, text, rotationDegree, sunriseTime, sunsetTime } =
    props;

  return (
    <div className="w-1/5 h-36 p-2 bg-slate-100 rounded-lg shadow">
      <div className="h-full flex flex-col items-center justify-center">
        <p className="text-lg font-bold capitalize">{title}</p>
        <Image
          src={image}
          alt={id}
          width={64}
          height={64}
          style={
            rotationDegree && { transform: `rotate(${rotationDegree}deg)` }
          }
        />
        {id === "sol" ? (
          <div className="w-full flex justify-evenly items-center">
            <div className="flex">
              <Image src={arrowUpImage} alt={id} width={20} height={20} />
              <span className="font-medium">{sunriseTime}</span>
            </div>
            <div className="flex">
              <Image
                src={arrowUpImage}
                alt={id}
                width={20}
                height={20}
                className="rotate-180"
              />
              <span className="font-medium">{sunsetTime}</span>
            </div>
          </div>
        ) : (
          <p className="font-medium">{text}</p>
        )}
      </div>
    </div>
  );
}

export default ExtraWeatherTodayCard;
