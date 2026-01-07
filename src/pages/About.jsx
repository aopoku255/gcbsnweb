import React from "react";
import { Link } from "react-router-dom";
import WorkingGroupsCard from "../components/Card";
import AboutUsCard from "../components/AboutUsCard";
import {
  EyeIcon,
  LightBulbIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";
import Team from "../components/Team";

const About = () => {
  return (
    <div className="relative isolate overflow-hidden bg-[#262626]">
      {/* Header Section */}
      <div className=" py-32 sm:py-32 bg-[#e0dada]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left ]">
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#262626]">
              About GCBN
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-[#262626] leading-relaxed">
              The GCBN seeks to contribute to the growth and advancement of
              computational biosciences in Ghana through an open peer-led
              community where stakeholders (students, researchers, etc.) can
              collaborate on capacity building and career opportunities geared
              towards their continuous professional development.
            </p>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <section className="py-24 sm:py-32 relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#680000] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="text-center text-4xl sm:text-5xl font-bold text-white">
            What We Do
          </h3>
          <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto">
            The GCBN seeks to contribute to the growth and advancement of
            computational biosciences in Ghana through an open peer-led
            community where stakeholders (students, researchers, etc.) can
            collaborate on capacity building and career opportunities geared
            towards their continuous professional development.
          </p>

          {/* Cards Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AboutUsCard
              icon={<LightBulbIcon className="size-10 text-gray-300" />}
              title={"Our Mission"}
              description={
                "Create a platform for capacity building, networking, and career development for students, researchers, and academics. Foster a vibrant Ghanaian biosciences community and enable national and international research collaborations."
              }
            />
            <AboutUsCard
              icon={<EyeIcon className="size-10 text-gray-300" />}
              title={"Our Vision"}
              description={
                "Offer professional development workshops, build communities of practice across Ghanaian HEIs, share career opportunities, and support local and international research collaborations."
              }
            />

            <AboutUsCard
              icon={
                <MagnifyingGlassCircleIcon className="size-10 text-gray-300" />
              }
              title={"Scope"}
              description={
                "We recognize the diverse interests within our community, covering multiple areas of computational biosciences. Our immediate focus, based on current team expertise, will be on:"
              }
            />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#680000] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </section>

      <Team />
    </div>
  );
};

export default About;
