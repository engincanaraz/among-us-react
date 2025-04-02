function HowToPlay() {
  return (
    <section className="py-10 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Decorative characters */}
      <img
        src="/images/ico/ico-black-player.png"
        alt="Black Among Us character"
        className="hidden lg:block absolute top-10 left-28 w-24 h-auto z-10"
      />
      <img
        src="/images/ico/ico-green-player.png"
        alt="Green Among Us character"
        className="hidden lg:block absolute top-40 left-[18%] w-20 h-auto z-10"
      />
      <img
        src="/images/ico/ico-purple-player.png"
        alt="Purple Among Us character"
        className="hidden lg:block absolute top-40 right-28 w-20 h-auto z-10"
      />

      {/* Decorative stars */}
      <img
        src="/images/ico/ico-star02.png"
        alt=""
        className="absolute top-24 left-[15%] w-6 sm:w-9 h-6 sm:h-9"
      />
      <img
        src="/images/ico/ico-star03.png"
        alt=""
        className="absolute top-64 left-[10%] w-6 sm:w-10 h-6 sm:h-10"
      />
      <img
        src="/images/ico/ico-star04.png"
        alt=""
        className="absolute top-32 right-[30%] w-4 sm:w-6 h-4 sm:h-6"
      />
      <img
        src="/images/ico/ico-star05.png"
        alt=""
        className="absolute top-56 right-[12%] w-3 sm:w-5 h-3 sm:h-5"
      />

      <div className="container mx-auto px-4 relative z-20">
        <h2 className="heading-2 text-center text-white mb-8 sm:mb-12 md:mb-16">
          How to Play
        </h2>

        <div className="text-center mx-2 sm:mx-8 md:m-16 lg:m-24">
          <p className="body-large text-gray-300 max-w-3xl mx-auto">
            Prepare for departure but beware the Impostor! Play with 4-15 <br className="hidden sm:block" />
            players online or via local WiFi as you{" "}
            <span className="text-red-400">
              attempt to hold your <br className="hidden sm:block" /> spaceship
            </span>{" "}
            together and survive, but be careful. One or more <br className="hidden sm:block" /> random
            players among the crew are Impostors bent on killing <br className="hidden sm:block" />{" "}
            everyone!
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          <div className="relative">
            <img
              src="../../public/images/the-crew.png"
              alt="The Crew"
              className="mx-auto mb-4 sm:mb-8 h-16 sm:h-20 md:h-24 w-auto"
            />
            <p className="body-large text-white text-center mb-6 sm:mb-8 md:mb-12 font-bold">
              Objective: Fill the group task bar or eject the Impostors
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mx-2 sm:mx-6 md:m-10">
              <div className="flex items-start space-x-4">
                <img
                  src="../../public/images/crew/crew-blue.png"
                  alt="Blue Crewmate"
                  className="w-10 h-13"
                />
                <div className="text-white">
                  <p className="body-normal">
                    Vote to eject suspected Impostors. Hope you guessed
                    correctly!
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img
                  src="../../public/images/crew/crew-green.png"
                  alt="Green Crewmate"
                  className="w-10 h-13"
                />
                <div className="text-white">
                  <p className="body-normal">
                    Call emergency meetings if you see any dead bodies or
                    suspicious behavior.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img
                  src="/../../public/images/crew/crew-pink.png"
                  alt="Pink Crewmate"
                  className="w-10 h-13"
                />
                <div className="text-white">
                  <p className="body-normal">React quickly to undo the Impostor sabotages.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img
                  src="../../public/images/crew/crew-white.png"
                  alt="White Impostor"
                  className="w-10 h-13"
                />
                <div className="text-white">
                  <p className="body-normal">
                    Check the Admin map and Security cameras to keep tabs on
                    other Crewmates.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img
                  src="../../public/images/crew/crew-purple.png"
                  alt="Purple Impostor"
                  className="w-10 h-13"
                />
                <div className="text-white">
                  <p className="body-normal">
                    Complete all the tasks on the ship or eject Impostors to
                    win.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img
                  src="../../public/images/crew/crew-yellow.png"
                  alt="Yellow Impostor"
                  className="w-10 h-13"
                />
                <div className="text-white">
                  <p className="body-normal">
                    Make sure you have your alibi ready in case your falsely
                    accused.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          <div className="relative">
            <img
              src="../../public/images/the-impostor.png"
              alt="The Crew"
              className="mx-auto mb-4 sm:mb-8 h-16 sm:h-20 md:h-24 w-auto"
            />
            <p className="body-large text-white text-center mb-6 sm:mb-8 md:mb-12 font-bold">
              Objective: Kill off the crew
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mx-2 sm:mx-6 md:m-10">
              <div className="flex items-start space-x-4 relative">
                <img
                  src="../../public/images/crew/crew-red.png"
                  alt="Red Crewmate"
                  className="w-8 sm:w-10 h-auto"
                />
                <img
                  src="/images/ico/ico-red-star.png"
                  alt="Red Star"
                  className="absolute top-1 left-2 sm:left-3 w-4 sm:w-5 h-4 sm:h-5 z-10"
                />
                <div className="text-white">
                  <p className="text-sm sm:text-base">Kill Crewmates and frame innocent bystanders.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 relative">
                <img
                  src="../../public/images/crew/crew-black.png"
                  alt="Green Crewmate"
                  className="w-8 sm:w-10 h-auto"
                />
                <img
                  src="/images/ico/ico-red-star.png"
                  alt="Red Star"
                  className="absolute top-1 left-2 sm:left-3 w-4 sm:w-5 h-4 sm:h-5 z-10"
                />
                <div className="text-white">
                  <p className="text-sm sm:text-base">Pretend to do tasks to blend in with the Crewmates.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 relative">
                <img
                  src="/../../public/images/crew/crew-orange-2.png"
                  alt="Pink Crewmate"
                  className="w-10 h-13"
                />
                <img
                  src="/images/ico/ico-red-star.png"
                  alt="Red Star"
                  className="absolute top-1 left-3 w-5 h-5 z-10"
                />
                <div className="text-white">
                  <p className="body-normal">React quickly to undo the Impostor sabotages.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 relative">
                <img
                  src="../../public/images/crew/crew-blue-2.png"
                  alt="White Impostor"
                  className="w-10 h-13"
                />
                <img
                  src="/images/ico/ico-red-star.png"
                  alt="Red Star"
                  className="absolute top-1 left-3 w-5 h-5 z-10"
                />
                <div className="text-white">
                  <p className="body-normal">
                    Check the Admin map and Security cameras to keep tabs on
                    other Crewmates.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 relative">
                <img
                  src="../../public/images/crew/crew-green-2.png"
                  alt="Purple Impostor"
                  className="w-10 h-13"
                />
                <img
                  src="/images/ico/ico-red-star.png"
                  alt="Red Star"
                  className="absolute top-1 left-3 w-5 h-5 z-10"
                />
                <div className="text-white">
                  <p className="body-normal">
                    Complete all the tasks on the ship or eject Impostors to
                    win.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 relative">
                <img
                  src="../../public/images/crew/crew-orange.png"
                  alt="Yellow Impostor"
                  className="w-10 h-13"
                />
                <img
                  src="/images/ico/ico-red-star.png"
                  alt="Red Star"
                  className="absolute top-1 left-3 w-5 h-5 z-10"
                />
                <div className="text-white">
                  <p className="body-normal">
                    Make sure you have your alibi ready in case your falsely
                    accused.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToPlay;
