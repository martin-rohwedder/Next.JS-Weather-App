import Image from "next/image";

function LocationContainer() {
  return (
    <section className="md:w-4/6 w-full my-12 flex items-center justify-center">
      <Image
        src="/images/weather/icons/location-pin.svg"
        alt="Location Pin"
        width={48}
        height={48}
        className="mr-2"
      />
      <h1 className="text-sky-900 text-4xl font-medium">Slagelse, Danmark</h1>
    </section>
  );
}

export default LocationContainer;
