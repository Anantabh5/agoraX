import React from 'react';
import Link from 'next/link';
const Nav = () => {
  return (
    <div className='max-w-full px-10 py-5 bg-gradient-to-t from-slate-300 shadow-lg z-10 to-white mx-w-full'>
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto ">

  <Link className="mr-9 hover:text-black text-xl" href="/services"> 
    Our Services
  </Link>
  <Link className="mr-9 hover:text-black text-xl" href="/track"> 
    Track
  </Link>
  <Link className="mr-9 hover:text-black text-xl" href="/about"> 
    About Us
  </Link>
  <Link className="mr-9 hover:text-black text-xl" href="/contact">
    Contact Us
  </Link>
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <img src="./Y.png" width={200}/>
      <span className="ml-3 text-xl"></span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-20"><Link href="/login" >Sign in</Link>
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</header>

    </div>
  )
}

export default Nav