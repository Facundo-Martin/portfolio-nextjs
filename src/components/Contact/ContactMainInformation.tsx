import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '../UI/SocialIcons';
import { EnvelopeIcon as SolidEnvelopeIcon, PhoneIcon as SolidPhoneIcon } from '@heroicons/react/24/solid';

function DetailsBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 h-full w-full"
          width={343}
          height={388}
          viewBox="0 0 343 388"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fillOpacity=".1" />
          <defs>
            <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" />
              <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 h-full w-full"
          width={359}
          height={339}
          viewBox="0 0 359 339"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fillOpacity=".1" />
          <defs>
            <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" />
              <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block" aria-hidden="true">
        <svg
          className="absolute inset-0 h-full w-full"
          width={160}
          height={678}
          viewBox="0 0 160 678"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fillOpacity=".1" />
          <defs>
            <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" />
              <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
export default function ContactMainInformation() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-teal-500 to-teal-600 py-10 px-6 sm:px-10 xl:p-12">
      {/* Decorative angle backgrounds */}
      <DetailsBackground />
      <h3 className="text-lg font-medium text-white">Contact information</h3>
      <p className="mt-6 max-w-3xl text-base text-teal-50">
        Honestly, email and phone number are your safest bet since I don&apos;t spend much time on other social networks.
      </p>
      <dl className="mt-8 space-y-6">
        <dt>
          <span className="sr-only">Phone number</span>
        </dt>
        <dd>
          <a href="tel:279-977-5880" className="flex gap-x-3 text-base text-teal-50 group">
            <PhoneIcon className="h-6 w-6 flex-shrink-0 text-teal-200 group-hover:hidden" aria-hidden="true" />
            <SolidPhoneIcon className="h-6 w-6 flex-shrink-0 text-slate-50 hidden group-hover:block" aria-hidden="true" />
            <span>+1 (279) 977-5880</span>
          </a>
        </dd>
        <dt>
          <span className="sr-only">Email</span>
        </dt>
        <dd>
          <a
            href="mailto:facundomartin98@gmail.com?subject=React Developer Position&body=Hi Facundo, I'm (name) and I work at (company) as a (position). We are currently looking for a React Developer who is well versed in (skills). After seeing your portfolio and work experience, we believe you are a strong candidate for this position. Please contact us at (contact info)"
            className="flex gap-x-3 text-base text-teal-50 group"
          >
            <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-teal-200 group-hover:hidden" aria-hidden="true" />
            <SolidEnvelopeIcon className="h-6 w-6 flex-shrink-0 text-slate-50 hidden group-hover:block" aria-hidden="true" />
            <span>facundomartin98@gmail.com</span>
          </a>
        </dd>
      </dl>
      <ul role="list" className="mt-8 flex gap-x-8">
        <li>
          <a href="https://www.linkedin.com/in/facundo-martin-88637422b/" target="_blank" rel="noreferrer">
            <span className="sr-only">LinkedIn</span>
            <LinkedInIcon className="w-8 fill-slate-50 opacity-80 hover:opacity-100" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Facundo-Martin" target="_blank" rel="noreferrer">
            <span className="sr-only">GitHub</span>
            <GitHubIcon className="w-8 fill-slate-50 opacity-80 hover:opacity-100" />
          </a>
        </li>
        <li>
          <div>
            <span className="sr-only">Twitter</span>
            <TwitterIcon className="w-8 fill-slate-50 opacity-80 hover:opacity-100" />
          </div>
        </li>
      </ul>
    </div>
  );
}
