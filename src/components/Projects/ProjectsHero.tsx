import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

function ProjectsHero() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = {};
  return (
    <section className="section bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">You Design, I build </h1>
        <button onClick={() => setToggle((prevState) => !prevState)} className="flex items-center  mt-6 text-base font-medium text-white sm:text-lg">
          {toggle ? <ChevronDownIcon className="w-6" /> : <ChevronRightIcon className="h-5" />}
          Disclaimer
        </button>
        {toggle && (
          <div className="pl-6">
            <p>Ok, I can do some design as well</p>
            <p>Ok, I can do some design as well</p>
            <p>Ok, I can do some design as well</p>
          </div>
        )}

        <p className="mt-6 text-base text-whitre">With experience in fast-paced startup environments, my main focus is to blablabla</p>
      </div>
      <div className="relative flex justify-center max-w-3xl mx-auto mt-10">
        <div className="inline-block w-full overflow-hidden font-mono font-medium text-white bg-white rounded-lg shadow-sm bg-opacity-10 text-">
          <div className="flex items-center w-full h-12 pl-4 bg-transparent opacity-80">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
          </div>
          <div className="px-5 pt-1 pb-5">
            <p className="">$ sudo craft_awesome_designs</p>
            <p className="mt-4">Loading Awesomeness...</p>
            <p className="">Ready to Deploy 🚀</p>
            <p className="flex items-center mt-4">
              $ Enter Your Name: <span className="h-4 w-2.5 bg-white inline-block ml-2"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsHero;
