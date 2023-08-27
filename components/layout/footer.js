import Link from "next/link";

function Footer() {
  return (
    <footer className="h-24 flex justify-center items-center">
      <p className="text-sky-700 font-medium">
        &copy; 2023{" "}
        <Link
          href="https://martin-rohwedder.dk"
          className="hover:underline hover:text-rose-800"
        >
          Martin Rohwedder
        </Link>
        . Alle rettigheder forbeholdt.
      </p>
    </footer>
  );
}

export default Footer;
