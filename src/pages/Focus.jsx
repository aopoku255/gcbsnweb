import React from "react";
import PageHeader from "../components/header/PageHeader";
import {
  BeakerIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import WorkingGroupsCard from "../components/Card";
import FocusHero from "../components/FocusHero";

const focusAreas = [
  {
    name: "Bioinformatics & Computational Biology",
    description:
      "We aim to build capacity in cutting-edge genomic analysis, bioinformatics workflows, systems biology, and data-driven approaches to understanding biological mechanisms. Through targeted training and community-driven research initiatives, we empower learners and professionals to work confidently with high-throughput data and computational tools widely used in modern biology.",
    icon: <BeakerIcon className="h-6 w-6 text-white" />,
  },
  {
    name: "Computational Medicinal Chemistry (Drug Design & Discovery)",
    description:
      "GCBN supports the development of skills in cheminformatics, molecular modeling, virtual screening, and computational drug design. Our programs help participants understand how computational methods accelerate drug discovery pipelines, enabling them to contribute meaningfully to biomedical research efforts in Ghana and beyond.",
    icon: <AcademicCapIcon className="h-6 w-6 text-white" />,
  },
];

const Focus = () => {
  return (
    <>
      <PageHeader header="Focus" />
      <FocusHero />
    </>
  );
};

export default Focus;
