
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" py-10">
        <h1 className="text-3xl font-bold text-center mb-7">MovieMatrix</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Overview Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Overview</h2>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#help" className="hover:underline">Help Center</a></li>
            <li><a href="#careers" className="hover:underline">Careers</a></li>
            <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:underline">Terms of Use</a></li>
            <li><a href="#cookies" className="hover:underline">Cookies Settings</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#facebook" className="text-gray-600 hover:text-gray-900">
              <FaFacebook size={24} />
            </a>
            <a href="#instagram" className="text-gray-600 hover:text-gray-900">
              <FaInstagram size={24} />
            </a>
            <a href="#twitter" className="text-gray-600 hover:text-gray-900">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Explore Other Brands */}
        <div>
          <h2 className="font-bold text-lg mb-4">Explore Other Brands</h2>
          <ul className="space-y-2">
            <li><a href="#gamespot" className="hover:underline">GameSpot</a></li>
            <li><a href="#giantbomb" className="hover:underline">Giant Bomb</a></li>
            <li><a href="#tvguide" className="hover:underline">TV Guide</a></li>
            <li><a href="#gamefaqs" className="hover:underline">GameFAQs</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        <p>
          © 2024 MovirMatrix. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
