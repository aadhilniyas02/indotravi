import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-8xl mx:auto px-6 sm:px-8 lg:px-24">
        {/* Footer Top*/}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 lg:gap-x-8 text-center sm:text-left">
          {/* About Section */}
          <div>
            <h4 className="font-bold text-lg mb-6 mt-10"> About </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Jobs</li>
              <li>In Press</li>
              <li>Gallery</li>
            </ul>
          </div>

          {/* Support Section*/}
          <div>
            <h4 className="font-bold text-lg mb-6 mt-10"> Support </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Contac Us</li>
              <li>Online Chat</li>
              <li>Whatsapp</li>
              <li>Telegram</li>
              <li>Ticketing</li>
              <li>Call Center</li>
            </ul>
          </div>

          {/* FAQ Section*/}
          <div>
            <h4 className="font-bold text-lg mb-6 mt-10"> FAQ </h4>
            <ul className="space-y-2 text-sm text-gray-400 ">
              <li>Account</li>
              <li>Booking</li>
              <li>Payments</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>

          {/* News Letter Section*/}
          <div className="">
            <h4 className="font-bold text-lg mb-4 mt-10"> Newsletter</h4>
            <p className="text-sm text-gray-400 mb-6">
              Don't miss out on the exciting world of travel - subscribe now and
              embark on a journey of discovery with us.
            </p>

            <div className="flex items-center space-x-2 bg-gray-800 rounded-full p-2">
              {/* Email Icon */}
              <i className="fa fa-envelope text-white text-sm ml-2"></i>

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent flex-1 text-sm outline-none px-4 text-white placeholder-gray-400"
              />
              <button className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm pr-2">
                Submit
              </button>
            </div>

            {/* Social Media Icons*/}
            <div className="flex lg:justify-end space-x-4 ml-2 lg:mt-3 justify-center mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram text-2xl"></i>
              </a>

              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook text-2xl"></i>
              </a>

              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Copy Right*/}
        <div className="mt-20 text-center text-gray-400 text-sm">
          ©2023 IndoTravi, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
