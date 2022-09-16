function HomeMain() {
  return (
    <div className="relative h-auto pb-32 sm:pb-48 md:pb-56">
      <img src="https://cdn.devdojo.com/images/july2021/mesh-bg.jpg" className="absolute inset-0 object-cover w-full h-full" />
      <div className="px-10">
        <div className="container relative max-w-3xl mx-auto pt-20">
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Crafting Elegant Designs, with Tailwind and Alpine
          </h1>
          <p className="flex items-center mt-6 text-base font-medium text-white sm:text-lg">
            <svg className="w-auto h-5 mr-2 text-white fill-current" viewBox="0 0 20 20">
              <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
            </svg>
            <span className="">Welcome to Tails</span>
          </p>
          <p className="mt-6 text-base text-pink-100">
            Are you ready to start crafting some elegant designs that helps your website shine? If so, you are in for a treat. Our TailwindCSS and AlpineJS
            drag'n drop page builder will help you crush your competition by showing professional and sweet looking designs to impress your users.
          </p>
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
      </div>
    </div>
  );
}

export default HomeMain;
