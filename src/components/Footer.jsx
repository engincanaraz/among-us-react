import { Link } from "react-router-dom";
import { FaTwitter, FaDiscord, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" pt-12 pb-8 border-t-2 border-among-red">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src="/images/logo.png" alt="Among Us" className="h-12" loading="lazy" />
            </Link>
            <p className="body-normal text-gray-400 mb-4">
              Among Us is an exciting social deduction game you can play with your friends. Complete tasks as a Crewmate or sabotage as an Impostor!
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-white text-black hover:text-among-red rounded-2xl p-2 transition-colors duration-300"
                aria-label="Discord"
              >
                <FaDiscord size={20} />
              </a>
              <a
                href="#"
                className="bg-white text-black hover:text-among-red rounded-2xl p-2 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="bg-white text-black hover:text-among-red rounded-2xl p-2 transition-colors duration-300"
                aria-label="TikTok"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-4 text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/game" className="body-normal text-gray-400 hover:text-among-red transition-colors duration-300">
                  Games
                </Link>
              </li>
              <li>
                <Link to="/news" className="body-normal text-gray-400 hover:text-among-red transition-colors duration-300">
                  News
                </Link>
              </li>
              <li>
                <Link to="/about" className="body-normal text-gray-400 hover:text-among-red transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="body-normal text-gray-400 hover:text-among-red transition-colors duration-300">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="heading-4 text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="body-normal text-gray-400 hover:text-among-red transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="body-normal text-gray-400 hover:text-among-red transition-colors duration-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="body-normal text-gray-400 hover:text-among-red transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="body-normal text-gray-400 hover:text-among-red transition-colors duration-300">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="heading-4 text-white mb-4">Newsletter</h3>
            <p className="body-normal text-gray-400 mb-4">
              Subscribe to our newsletter for the latest news and updates.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="body-small text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Among Us. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="body-small text-gray-400 hover:text-among-red transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="body-small text-gray-400 hover:text-among-red transition-colors duration-300">
              Terms of Use
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="body-small text-gray-400 hover:text-among-red transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;