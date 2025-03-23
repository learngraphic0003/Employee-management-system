import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center md:text-left">
        
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            We are committed to delivering innovative solutions and meaningful content to engage and inspire our audience.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Services</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul>
            <li className="mb-2">Email: <a href="mailto:rawatsubham9837@gmail.com" className="hover:underline">rawatsubham9837@gmail.com</a></li>
            <li className="mb-2">Phone: <a href="tel:+1234567890" className="hover:underline">9837408959</a></li>
            <li className="mb-2">Address: 123 Innovation Drive, Tech City</li>
          </ul>
        </div>

      </div>

      {/* App Download Section */}
      <div className="flex flex-col md:flex-row items-center justify-center py-6 px-4 space-y-4 md:space-y-0 md:space-x-6">
        <h1 className="text-xl font-semibold text-center md:text-left">For a better experience, download the Swiggy app now</h1>
        <div className="flex space-x-4">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="App Store" className="w-40"/>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="Google Play" className="w-40"/>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
        <p>Made with ❤ for innovation.</p>
      </div>
    </footer>
  );
};

export default Footer;
