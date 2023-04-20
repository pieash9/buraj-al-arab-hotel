import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
             <div className="bg-gray-100 min-h-screen">
      {/* First Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to the Buraj Al Arab
              </h2>
              <p className="text-gray-600">
                Discover a new level of luxury and comfort at the Grand Hotel.
                Whether you're here for business or pleasure, our hotel is the
                perfect place to relax and unwind.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                className="rounded-lg shadow-lg"
                src="https://source.unsplash.com/800x600/?hotel"
                alt="Hotel"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-gray-800 py-20 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="md:flex md:items-center md:justify-between">
      <div className="md:w-1/2">
        <img
          className="rounded-lg shadow-lg h-96 object-cover object-center"
          src="https://source.unsplash.com/800x600/?pool"
          alt="Pool"
        />
      </div>
      <div className="md:w-1/2 md:pl-12">
        <h2 className="text-4xl font-bold mb-4">Relax by the pool</h2>
        <p className="text-lg mb-8 leading-relaxed">
          Take a dip in our sparkling outdoor pool, or soak up the sun on one
          of our comfortable lounge chairs. It's the perfect way to unwind after
          a long day of meetings or sightseeing.
        </p>
        <Link to='/book'><button className="bg-white text-gray-800 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
          Book now
        </button></Link>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default Home;