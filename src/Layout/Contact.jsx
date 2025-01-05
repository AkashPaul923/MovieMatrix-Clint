import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-12 px-5 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className=" mb-6">
            We work hard to answer queries and ensure your experience is as good
            as possible. If you have a story to share or questions, feel free to
            get in touch with us!
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Your Name (required)
              </label>
              <input
                type="text"
                id="name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block  mb-1">
                Your Email (required)
              </label>
              <input
                type="email"
                id="email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block  mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label htmlFor="message" className="block  mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                className="textarea textarea-bordered w-full"
                rows="4"
              ></textarea>
            </div>
            <button className="btn btn-error w-full">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
