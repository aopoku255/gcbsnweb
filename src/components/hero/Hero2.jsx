import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  GlobeAltIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import WorkingGroupsCard from "../Card";

const features = [
  {
    name: "Focus",
    description:
      "The Ghana Computational Biosciences Network (GCBN) is committed to advancing the frontiers of computational...",
    icon: <MagnifyingGlassIcon className="h-6 w-6 text-white" />,
  },
  {
    name: "Community",
    description:
      "At the heart of GCBN is a vibrant, inclusive, and peer-led community committed to mutual growth and scientific...",
    icon: <GlobeAltIcon className="h-6 w-6 text-white" />,
  },
  {
    name: "Workshops",
    description:
      "Workshops form the backbone of our commitment to building a strong and future-ready computational bioscience community...",
    icon: <UserGroupIcon className="h-6 w-6 text-white" />,
  },
];

export default function Hero2() {
  return (
    <div className="bg-[#242222] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-6xl lg:text-balance bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_50%,#680000_100%)] bg-clip-text text-transparent">
            Advancing Computational Biosciences in Ghana
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <WorkingGroupsCard
                title={feature.name}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
