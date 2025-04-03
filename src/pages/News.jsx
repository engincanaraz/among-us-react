function News() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="heading-1 text-center mb-8">Latest News</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-among-space rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/role.jpeg"
            alt="New Update"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-among-blue text-white text-sm font-bold px-3 py-1 rounded">
                Update
              </span>
              <span className="text-gray-400 text-sm">June 15, 2023</span>
            </div>
            <h2 className="heading-3 mb-2 text-white">
              New Roles Update
            </h2>
            <p className="body-normal text-gray-300 mb-4">
              Discover the new roles coming to Among Us in our latest update.
              More ways to deceive your friends!
            </p>
            <button className="among-button-red rounded-3xl py-2 px-4">
              Read More
            </button>
          </div>
        </div>

        <div className="bg-among-space rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/crewmate.jpeg"
            alt="Community Event"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-among-red text-white text-sm font-bold px-3 py-1 rounded">
                Event
              </span>
              <span className="text-gray-400 text-sm">May 28, 2023</span>
            </div>
            <h2 className="heading-3 mb-2 text-white">
              Summer Crewmate Challenge
            </h2>
            <p className="body-normal text-gray-300 mb-4">
              Join our summer event and compete with players worldwide for
              exclusive in-game rewards and recognition.
            </p>
            <button className="among-button-red rounded-3xl py-2 px-4">
              Read More
            </button>
          </div>
        </div>

        <div className="bg-among-space rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/space.jpg"
            alt="Collaboration News"
            className="w-full h-64 object-cover "
          />
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded">
                Collaboration
              </span>
              <span className="text-gray-400 text-sm">April 10, 2023</span>
            </div>
            <h2 className="heading-3 mb-2 text-white">
              Among Us x Space Explorers
            </h2>
            <p className="body-normal text-gray-300 mb-4">
              Were excited to announce our collaboration with Space Explorers!
              Get exclusive skins and maps.
            </p>
            <button className="among-button-red rounded-3xl py-2 px-4">
              Read More
            </button>
          </div>
        </div>

        <div className="bg-among-space rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/map.png"
            alt="Development Update"
            className="w-full h-64 object-cover  bg-center "
          />
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-purple-500 text-white text-sm font-bold px-3 py-1 rounded">
                Development
              </span>
              <span className="text-gray-400 text-sm">March 22, 2023</span>
            </div>
            <h2 className="heading-3 mb-2 text-white">
              Behind the Scenes: Map Creation
            </h2>
            <p className="body-normal text-gray-300 mb-4">
              Take a peek behind the curtain as our developers share insights
              into creating the perfect Among Us maps.
            </p>
            <button className="among-button-red rounded-3xl py-2 px-4">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
