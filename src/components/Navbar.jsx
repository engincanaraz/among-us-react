import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaDiscord, FaTiktok } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);

  useEffect(() => {
    const savedPreference = localStorage.getItem("hideAnnouncement");
    if (savedPreference === "true") {
      setIsAnnouncementVisible(false);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeAnnouncement = () => {
    setIsAnnouncementVisible(false);
    localStorage.setItem("hideAnnouncement", "true");
  };

  return (
    <>
      <nav className="bg-black py-6 h-[6.75rem]">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="flex-1">
              <Link to="/" className="text-3xl font-bold text-white">
                <img src="/images/logo.png" alt="Among Us" className="h-11" loading="lazy" />
              </Link>
            </div>

            <div className="hidden lg:flex items-center flex-1 justify-center">
              <ul className="menu menu-horizontal rounded-box flex-wrap">
                <li className="group">
                  <Link
                    to="/"
                    className="body-normal text-white hover:text-among-red font-bold px-2 lg:px-2 xl:px-6 2xl:px-8">
                    Home
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/game"
                    className="body-normal text-white hover:text-among-red font-bold px-2 lg:px-2 xl:px-6 2xl:px-8">
                    Games
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/news"
                    className="body-normal text-white hover:text-among-red font-bold px-2 lg:px-2 xl:px-6 2xl:px-8">
                    News
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/about"
                    className="body-normal text-white hover:text-among-red font-bold px-2 lg:px-2 xl:px-6 2xl:px-8">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden lg:flex items-center space-x-4 flex-1 justify-end">
              <a
                href="#"
                className="bg-white text-black hover:text-among-red rounded-2xl p-1">
                <FaDiscord size={20} />
              </a>
              <a
                href="#"
                className="bg-white text-black hover:text-among-red rounded-2xl p-1">
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="bg-white text-black hover:text-among-red rounded-2xl p-1">
                <FaTiktok size={20} />
              </a>
            </div>

            <button className="lg:hidden" onClick={toggleMenu}>
              {isMenuOpen ? (
                <IoMdClose className="w-8 h-8 text-white" />
              ) : (
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-16 6h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile and Tablet Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-black border-t border-gray-800 absolute top-[6.75rem] left-0 w-full z-50 py-4 shadow-lg">
              <div className="container mx-auto px-4">
                <ul className="space-y-4 text-center">
                  <li className="py-2 text-center">
                    <Link
                      to="/"
                      onClick={toggleMenu}
                      className="body-normal text-white hover:text-among-red font-bold block py-2">
                      Home
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      to="/game"
                      onClick={toggleMenu}
                      className="body-normal text-white hover:text-among-red font-bold block py-2">
                      Games
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      to="/news"
                      onClick={toggleMenu}
                      className="body-normal text-white hover:text-among-red font-bold block py-2">
                      News
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      to="/about"
                      onClick={toggleMenu}
                      className="body-normal text-white hover:text-among-red font-bold block py-2">
                      About
                    </Link>
                  </li>
                  {/* Shop link removed for consistency with desktop menu */}
                </ul>

                <div className="flex items-center space-x-4 mt-6 justify-center">
                  <a
                    href="#"
                    className="bg-white text-black hover:text-among-red rounded-2xl p-1">
                    <FaDiscord size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-black hover:text-among-red rounded-2xl p-1">
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-black hover:text-among-red rounded-2xl p-1">
                    <FaTiktok size={20} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      {isAnnouncementVisible && (
        <div className="bg-among-red py-2 sm:py-3 px-2 sm:px-4 text-center text-white flex flex-wrap justify-center min-h-[3.25rem] relative transition-all duration-300 ease-in-out">
          <div className="px-2 sm:px-5 py-1">
            <span className="body-small font-bold px-1">OUT NOW!</span>{" "}
            <span className="body-small font-light px-1">
              December 9, 2022{" "}
            </span>
            <span className="body-small px-1">Play our all new game mode.</span>
          </div>
          <div className="px-2 sm:px-5 py-1">
            <span className="body-small font-extrabold px-2 sm:px-5">
              {" "}
              NEW GAME MODE: Hide n Seek is here! | Emergency Meeting #35
            </span>
          </div>
          <button
            onClick={closeAnnouncement}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 focus:outline-none"
            aria-label="Duyuruyu kapat">
            <IoMdClose size={20} />
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
