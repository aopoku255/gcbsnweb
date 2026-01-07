import { Link } from "react-router-dom";

export default function WorkingGroupsCard({ title, description, icon, link }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl 
      bg-gradient-to-b from-[#2b2a3d] via-[#2a2936] to-[#26262656] 
      p-6 sm:p-8 shadow-lg transition-all duration-300 hover:scale-[1.03]"
    >
      {/* Icon */}
      <div
        className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg 
        bg-[#767171]/10
        transition-transform duration-300 ease-out
        group-hover:rotate-6"
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-[#c94545]">{title}</h3>

      {/* Description */}
      <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-300">
        {description}
      </p>

      {/* Action */}
      <div
        className="mt-8 flex justify-end
        opacity-0 translate-y-2
        transition-all duration-300 ease-out
        group-hover:opacity-100 group-hover:translate-y-0"
      >
        <Link to={link} className="text-sm font-medium text-white">
          Explore →
        </Link>
      </div>
    </div>
  );
}
