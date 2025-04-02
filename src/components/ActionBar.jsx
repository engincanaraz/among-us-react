function ActionBar() {
  return (
    <section className=" py-10 sm:py-16 md:py-20">
      <div className="relative mb-8 sm:mb-12 md:mb-16 overflow-hidden w-auto mx-auto">
        <div
          className="h-[300px] sm:h-[350px] md:h-[446px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/amongus_merchbanner.png')" }}>
          <div className="absolute flex items-center text-start justify-center left-4 sm:left-16 md:left-28 top-1/4 sm:top-1/3">
            <div className="px-4 sm:px-8 md:px-16 max-w-md ">
              <h2 className="heading-2 text-white mb-1 sm:mb-2">
                Get official merch
              </h2>
              <p className="body-large text-white mb-3 sm:mb-4 md:mb-6">
                From Among Us & more
              </p>
              <button className="among-button-red rounded-3xl h-10 sm:h-12 md:h-14 w-36 sm:w-48 bg-among-blue hover:bg-blue-400">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-full mx-auto h-auto sm:h-60">
        <div className="bg-[#2d75b6] p-4 sm:p-6 md:p-8 flex items-center justify-center">
          <div className="mx-auto text-start">
            <h4 className="heading-4 font-thin text-white mb-2 sm:mb-4">
              Have a question about among <br className="hidden sm:block" /> us, merch, or fan art?
            </h4>
            <button className="among-button bg-white hover:bg-gray-100 text-among-blue rounded-full w-36 sm:w-48 items-start">
              See FAQs
            </button>
          </div>
          <div className="absolute right-0 top-0 bottom-0 z-0 flex items-center ">
              {/* <img className="w-28 h-auto " src="/public/images/div_after.png" alt="" />  */}
          </div>
        </div>

        <div className="bg-[#1c1c1c] bg-opacity-70 p-4 sm:p-6 md:p-8 flex flex-col justify-center text-center">
          <h4 className="heading-4 font-thin text-gray-300">
            Be the first one to know when we <br className="hidden sm:block"/> launch new stuff.
          </h4> 
          <div className="mt-2 sm:mt-4">
            <div className="relative max-w-xs sm:max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full text-white bg-transparent border border-gray-600 hover:border-gray-400 focus:border-among-blue focus:outline-none transition-colors duration-300 rounded-full px-4 sm:px-6 py-2 sm:py-3 pr-12 sm:pr-16"
              />
              <button className="among-button absolute right-1 top-1 bottom-1 bg-among-blue hover:bg-blue-600 transition-colors duration-300 px-3 sm:px-4 rounded-full flex items-center justify-center p-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

  
    </section>
  );
}

export default ActionBar;
