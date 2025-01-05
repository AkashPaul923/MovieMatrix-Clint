
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12 px-5 md:px-10">
        <h1 className="text-3xl font-bold text-center mb-7">MovieMatrix</h1>
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Overview Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Overview</h2>
          <ul className="space-y-2">
            <li><Link to="/allmovies" className="hover:underline">All Movies</Link></li>
            <li><Link to="/addmovies" className="hover:underline">Add Movies</Link></li>
            <li><Link to="/myfavorites" className="hover:underline">My Favorites</Link></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className='text-center'>
          <h2 className="font-bold text-lg mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-center space-x-4">
            <a href="#facebook" className="text-gray-200 hover:text-gray-500">
              <FaFacebook size={24} />
            </a>
            <a href="#instagram" className="text-gray-200 hover:text-gray-500">
              <FaInstagram size={24} />
            </a>
            <a href="#twitter" className="text-gray-200 hover:text-gray-500">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Explore Other Brands */}
        <div className='md:text-right'>
          <h2 className="font-bold text-lg mb-4">Explore Other</h2>
          <ul className="space-y-2">
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        <p>
          © 2025 MovirMatrix. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
