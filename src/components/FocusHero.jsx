import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Bioinformatics & Computational Biology",
    description:
      "We aim to build capacity in cutting-edge genomic analysis, bioinformatics workflows, systems biology, and data-driven approaches to understanding biological mechanisms. Through targeted training and community-driven research initiatives, we empower learners and professionals to work confidently with high-throughput data and computational tools widely used in modern biology.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Computational Medicinal Chemistry (Drug Design & Discovery)",
    description:
      "GCBN supports the development of skills in cheminformatics, molecular modeling, virtual screening, and computational drug design. Our programs help participants understand how computational methods accelerate drug discovery pipelines, enabling them to contribute meaningfully to biomedical research efforts in Ghana and beyond.",
    icon: LockClosedIcon,
  },
];

export default function FocusHero() {
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
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
            Our Focus
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            The Ghana Computational Biosciences Network (GCBN) is committed to
            advancing the frontiers of computational biosciences in Ghana by
            nurturing talent, fostering collaboration, and driving innovation.
          </p>
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
