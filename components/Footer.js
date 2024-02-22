import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 z-0 text-white pt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-xl font-bold">Company</h4>
            <ul className="mt-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-xl font-bold">Products</h4>
            <ul className="mt-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">ChainFlow</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">RuneMan</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">LogistX</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-xl font-bold">Resources</h4>
            <ul className="mt-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Tutorials</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Blog</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-xl font-bold">Follow Us</h4>
            <ul className="mt-4 flex space-x-4 flex-col ">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="">instagram</i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="">twitter</i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="">linkedin</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400">&copy; 2024 agoraX . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
