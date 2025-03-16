import { Check } from "lucide-react";
import Marquee from "react-fast-marquee";

import { Container } from "@/components/container";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-100 dark:from-gray-800 dark:via-indigo-900 dark:to-purple-900 overflow-hidden pb-20">
      <Container>
        <main className="my-8 flex flex-col items-center gap-12 lg:flex-row ">
          <section className="lg:w-[50%] lg:text-left">
            <h1 className="text-4xl md:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center lg:text-left">
              Mock Interviews <br /> with{" "}
              <span className="text-indigo-600">AI</span>
            </h1>
            <p className="mt-3 text-base text-gray-700 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Ace Your Next Interview with AI-Powered Mock Sessions!
            </p>
            <Link to={"/generate"} className="w-full">
              <button className="whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-all ease-linear gap-x-2 mt-6 mx-auto lg:mx-0 hover:scale-[1.05]">
                Start Free Interview <ArrowRightIcon />{" "}
              </button>
            </Link>
            <section className="mt-8">
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase text-center lg:text-left">
                Why choose us?
              </h4>
              <div className="mt-3">
                <div className="flex items-center gap-x-2 mt-2">
                  <Check color="#01f405" />{" "}
                  <span className="text-gray-600 test-sm">
                    Realistic AI-powered interview simulations
                  </span>
                </div>
                <div className="flex items-center gap-x-2 mt-2">
                  <Check color="#01f405" />{" "}
                  <span className="text-gray-600 test-sm">
                    Personalized feedback to boost your confidence
                  </span>
                </div>
                <div className="flex items-center gap-x-2 mt-2">
                  <Check color="#01f405" />{" "}
                  <span className="text-gray-600 test-sm">
                    Flexible practice anytime, anywhere
                  </span>
                </div>
              </div>
            </section>
          </section>
          <section className="lg:w-[50%] flex items-center justify-center">
            <img
              src="/assets/img/herosection.jpg"
              alt="hero-section"
              className="w-full rounded-xl"
            />
          </section>
        </main>
      </Container>

      {/* marquee section */}
      <div className=" w-full my-12">
        <h5 className="text-center text-lg font-semibold">
          Prepare Interview for any company
        </h5>
        <Marquee>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>
    </div>
  );
};

export default HomePage;
