import { GlobeAltIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-[#262626] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white">
              Ghana Computational Biosciences Network
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400">
              Advancing computational bioscience research, capacity building,
              and collaboration across Ghana through community, training, and
              innovation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Network
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Working Groups
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Workshops
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="h-4 w-4" />
                <a href="mailto:info@gcbn.org" className="hover:text-white">
                  info@gcbn.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <GlobeAltIcon className="h-4 w-4" />
                <a href="#" className="hover:text-white">
                  www.gcbsn.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Ghana Computational Biosciences
            Network. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
