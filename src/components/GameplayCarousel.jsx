import { useState } from 'react';
import FsLightbox from 'fslightbox-react';

function GameplayCarousel() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });
  
  const openLightboxOnSlide = (number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number
    });
  };

  const screenshots = [
    {
      img: "/images/gameplay/gameplay-1.jpg",
      title: "GAME PLAY SCREENSHOTS",
    },
    {
      img: "/images/gameplay/gameplay-2.jpg",
      title: "MEETINGS",
    },
    {
      img: "/images/gameplay/gameplay-3.jpg",
      title: "TASKS",
    },
    {
      img: "/images/gameplay/gameplay-4.jpg",
      title: "CREWMATE",
    },
  ];

  const sources = screenshots.map(screenshot => screenshot.img);

  return (
    <section className="py-10 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="heading-2 text-center text-white mb-6 sm:mb-8 md:mb-12">
          GAME PLAY SCREENSHOTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              onClick={() => openLightboxOnSlide(index + 1)}
              className="relative group cursor-pointer border border-1 border-solid border-gray-500">
              <img
                src={screenshot.img}
                alt={screenshot.title}
                className="w-full aspect-video object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg flex items-center justify-center">
                <span className="text-white body-normal font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  {screenshot.title}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={sources}
          slide={lightboxController.slide}
        />
      </div>
    </section>
  );
}

export default GameplayCarousel;
