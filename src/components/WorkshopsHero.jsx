import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Programming Fundamentals in R",
    description:
      "Hands-on introduction to R covering basic syntax, data wrangling with tidyverse, descriptive statistics, and essential data visualization techniques. Participants learn how to clean, explore, and present biological and health-related datasets.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Programming with Python",
    description:
      "A beginner-friendly immersion into Python focusing on core syntax, working with variables and data types, writing functions, handling errors, and building simple scripts. The goal is to help participants develop problem-solving skills and confidence in using Python for scientific and data-driven tasks.",
    icon: LockClosedIcon,
  },
];

const secondfeatures = [
  {
    name: "Bioinformatics & Computational Biology",
    description:
      "transcriptomics, genomics, systems biology, machine learning for biological data.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Computational Medicinal Chemistry",
    description:
      "Molecular modeling, docking, virtual screening, cheminformatics, AI-driven drug discovery.",
    icon: LockClosedIcon,
  },
  {
    name: "Other Emerging Tracks",
    description:
      "Depending on community needs—such as health data science, computational epidemiology, etc.",
    icon: LockClosedIcon,
  },
];

export default function WorkshopsHero() {
  return (
    <div className="bg-[#242222] py-24 sm:py-32 relative isolate">
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
        <div className="max-w-3xl ">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
            Our Workshops
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            Workshops form the backbone of our commitment to building a strong
            and future-ready computational bioscience community in Ghana. Our
            training programs are designed to be practical, accessible, and
            impactful ensuring that participants gain real skills they can apply
            in academic research, industry, and innovation ecosystems. Whether
            you are a beginner exploring the field or an experienced researcher
            seeking advanced techniques, our workshops provide a structured
            pathway for growth.
          </p>
        </div>
        <div className="text-gray-300 mt-16  sm:mt-20 lg:mt-24">
          <h2 className="text-2xl font-bold">1. Introductory Training</h2>
          <p>
            Our introductory workshops offer a solid foundation for newcomers to
            computational biosciences. These sessions cover essential skills
            that prepare participants for more specialized tracks.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="">
          <h2 className="mt-16 text-gray-300 font-bold text-3xl text-center">
            Key Areas Include
          </h2>
        </div>

        <div className="mx-auto mt-16  sm:mt-20 lg:mt-24 ">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-2xl font-semibold text-white text mb-4">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="text-gray-300 mt-16  sm:mt-20 lg:mt-24">
          <h2 className="text-2xl font-bold">2. Track-Specific Training</h2>
          <p>
            After mastering the basics, members can progress into specialized
            workshop tracks aligned with GCBN’s major focus areas. Each track
            includes both basic and advanced modules, allowing participants to
            build expertise progressively while working on real-world datasets
            and problems.
          </p>
        </div>

        <div className="mx-auto mt-16  sm:mt-20 lg:mt-24 ">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {secondfeatures.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-2xl font-semibold text-white text mb-4">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
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
    </div>
  );
}
