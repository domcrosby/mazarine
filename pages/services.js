import Head from "next/head";
import { NavBar } from "../components";

const services = [
  {
    title: "Brand Strategy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Content Strategy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "UX Strategy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Visual Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Services - Mazarine</title>
      </Head>
      <NavBar />
      <>
        <div className="text-center p-8 ">
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 p-16">
          {services.map(({ title, description }) => (
            <div className="prose">
              <h2>{title}</h2>
              <h3>{description}</h3>
            </div>
          ))}
        </div>
      </>
    </>
  );
}
