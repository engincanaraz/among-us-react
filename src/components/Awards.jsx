function Awards() {
  const awards = [
    {
      title: "Kid’s Choice Award for Favorite Video Game 2021",
      year: "2021",
    },
    {
      title: "",
      year: "2020",
    },
    {
      title: "Mobile Game Awards for Best Indie Developer",
      year: "2021",
    },
    {
      title: "Webby Breakout of the Year Award",
      year: "2021",
    },
    {
      title: "Golden Joysticks Breakthrough Award",
      year: "2021",
    },
    {
      title: "Golden Joysticks Breakthrough Award",
      year: "2020",
    },
    {
      title: "App Store 2021 Award for Trend of the Year: Connection",
      year: "2021",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-950 relative overflow-hidden">
      {/* Decorative stars */}
      <img
        src="/images/ico/ico-star02.png"
        alt=""
        className="absolute top-28 left-[16%] w-4 sm:w-6 h-4 sm:h-6"
      />
      <img
        src="/images/ico/ico-star03.png"
        alt=""
        className="absolute top-36 left-[12%] w-4 sm:w-6 h-4 sm:h-6"
      />
      <img
        src="/images/ico/ico-star04.png"
        alt=""
        className="absolute top-52 right-[14%] w-4 sm:w-6 h-4 sm:h-6"
      />
      <img
        src="/images/ico/ico-star05.png"
        alt=""
        className="absolute top-32 right-[18%] w-4 sm:w-6 h-4 sm:h-6"
      />

      {/* Yellow player character */}
      <img
        src="/images/ico/ico-yellow-player.png"
        alt="Yellow Among Us character"
        className="hidden lg:block absolute top-2 left-28 w-24 h-auto z-10"
      />

      {/* Red player character */}
      <img
        src="/images/ico/ico-red-player.png"
        alt="Red Among Us character"
        className="hidden lg:block absolute top-40 right-28 w-20 h-auto z-10"
      />

      <div className="container mx-auto px-4 relative z-20">
        <h2 className="heading-1 text-center text-white mb-6 sm:mb-8 md:mb-12">
          Among Us is a party game of <br className="hidden sm:block" />
          teamwork and betrayal.
        </h2>
        <h4 className="heading-3 font-extralight text-center text-white mb-8 sm:mb-10 md:mb-12">
          Crewmates work together to complete tasks before one or <br className="hidden sm:block" />
          more Impostors can kill everyone aboard.
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-among-gray bg-opacity-50 rounded-sm p-4 sm:p-6 text-center transform hover:scale-105 transition-transform h-auto sm:h-36">
              {award.title ? (
                <h3 className="heading-4 text-white mb-2">
                  {award.title}
                </h3>
              ) : (
                <img
                  src="/images/tag.png"
                  alt="Award Tag"
                  className="h-auto w-48 sm:w-64 mx-auto -mt-8 sm:-mt-12"
                />
              )}
              {award.year && (
                <p className="body-normal text-among-beige font-bold">{award.year}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
