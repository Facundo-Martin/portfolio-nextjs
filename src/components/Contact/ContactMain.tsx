import ContactMainInformation from './ContactMainInformation';

export default function ContactMain() {
  return (
    <section className="pb-12">
      {/* Contact section */}

      {/* Decorative dot pattern */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative shadow-xl border dark:border-neutral-500/80 rounded-lg">
          <h2 id="contact-heading" className="sr-only">
            Contact us
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <ContactMainInformation />
            {/* Contact form */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-warm-gray-900">Send us a message</h3>
              <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-warm-gray-900">
                    First name
                  </label>
                  <div className="mt-1">
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="form-input" />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-warm-gray-900">
                    Last name
                  </label>
                  <div className="mt-1">
                    <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="form-input" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-warm-gray-900">
                    Email
                  </label>
                  <div className="mt-1">
                    <input id="email" name="email" type="email" autoComplete="email" className="form-input" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium text-warm-gray-900">
                      Phone
                    </label>
                    <span id="phone-optional" className="text-sm text-warm-gray-500">
                      *Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input type="text" name="phone" id="phone" autoComplete="tel" className="form-input" aria-describedby="phone-optional" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-warm-gray-900">
                    Subject
                  </label>
                  <div className="mt-1">
                    <input type="text" name="subject" id="subject" className="form-input" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="message" className="block text-sm font-medium text-warm-gray-900">
                      Message
                    </label>
                    <span id="message-max" className="text-sm text-warm-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea id="message" name="message" rows={4} className="form-input" aria-describedby="message-max" defaultValue={''} />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-teal-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
