import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white max-h-screen mt-auto hsc bottom-0 py-8 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <img
            className="h-8"
            src="https://www.logolynx.com/images/logolynx/26/26688de96efd09f18bccc5b9ab8a96ce.jpeg"
            alt="Hotel Logo"
          />
        </div>
        <div className="text-sm text-gray-400">
          <p>
            Contact us: <br />
            123 Main Street <br />
            Anytown, USA 12345 <br />
            555-555-5555
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
