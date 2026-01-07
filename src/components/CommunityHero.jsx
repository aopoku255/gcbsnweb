import community from "../assets/community.jpg";
export default function CommunityHero() {
  return (
    <div className="overflow-hidden relative isolate  bg-[#262626] py-24 sm:py-32">
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
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                Our Community
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                At the heart of GCBN is a vibrant, inclusive, and peer-led
                community committed to mutual growth and scientific excellence.
                We bring together students, researchers, educators, and industry
                stakeholders who share a passion for the intersection of
                computation, chemistry and bioscience.
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                Our community provides:
              </p>
              <ul className="mt-8 space-y-5">
                {[
                  "A collaborative environment for learning, knowledge exchange, and problem-solving.",
                  "Networking opportunities that connect members across institutions, expertise levels, and career paths.",
                  "Access to opportunities, including postgraduate programs, job openings, mentorship, and research collaborations.",
                  "Support structures that enable members to work on shared projects, publish research, and contribute to national scientific development.",
                ].map((text, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400 font-semibold">
                      {i + 1}
                    </span>
                    <p className="text-lg leading-8 text-gray-300">{text}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-8 max-w-xl text-gray-300">
                <span className="font-semibold text-indigo-400">GCBN</span> is
                built on openness, peer support, and the belief that collective
                effort accelerates growth for all. We also aim to establish
                institutional chapters that encompass local Communities of
                Practice within Higher Education Institutions across Ghana.
              </p>
            </div>
          </div>
          <img
            alt="Community gathering"
            src={community}
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl  sm:w-228 md:-ml-4 lg:-ml-0"
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
    </div>
  );
}
