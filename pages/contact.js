import Head from "next/head";
import { NavBar } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact - Mazarine</title>
      </Head>
      <NavBar />
      <>
        <div className="flex justify-center ">
          <div className="text-center p-8 w-full md:w-3/5 max-w-2xl">
            <p className="mt-2 text-3xl font-light leading-8 tracking-tight text-gray-900">
              Please fill out the form below to request a quote for a project,
              inquire about a collaboration, or simply say hello.
            </p>
            <div className="py-4 px-2 center text-left">
              <div className="mt-8">
                <div className="grid grid-cols-1 gap-6">
                  <label className="block">
                    <span className="text-gray-700">Full name</span>
                    <input
                      type="text"
                      className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                      placeholder=""
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Your Email address</span>
                    <input
                      type="email"
                      className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                      placeholder="john@example.com"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Subject</span>
                    <input
                      type="text"
                      className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Message</span>
                    <textarea
                      className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                      rows="4"
                    ></textarea>
                  </label>
                </div>
                <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 mt-8 rounded-full">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
