import FsLightbox from "fslightbox-react";
import { useState } from "react";

function Hero() {
  const [toggler, setToggler] = useState(false);
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-characters.png"
          alt="Among Us Characters"
          className="w-full object-cover h-screen"
        />
        <img
          src="/images/curve.png"
          alt=""
          className="absolute bottom-0 w-full z-10"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-16 md:pb-20 h-auto sm:h-64">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center space-y-4 sm:space-y-6">
            <img
              src="/images/logoXL.png"
              alt="Among Us Logo"
              className="mt-20 sm:mt-28 md:mt-40 h-24 sm:h-28 md:h-36 w-auto"
            />
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 sm:mt-8">
              <button 
                onClick={() => setToggler(!toggler)} 
                className="among-button bg-among-blue hover:bg-blue-400 rounded-3xl flex items-center space-x-2 justify-center h-12 sm:h-14 w-48 sm:w-60 body-normal text-white"
              >
                Watch the Trailer
              </button>
              <FsLightbox
                toggler={toggler}
                sources={[
                  'https://youtu.be/ljm85tBVhQI',
                  'https://www.youtube.com/watch?v=0YKjFoGxbec'
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
