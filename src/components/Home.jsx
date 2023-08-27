import React from 'react';
import Self from '../assets/self.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
    name='home'
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      {/* For Home page background */}
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        {/* for this homepage information */}
        <div className='flex flex-col justify-center h-full md:pr-8'>
          {/* Added padding on the right for small devices (md) and larger */}
          <h2 className='text-4xl sm:text-6xl font-bold text-white'>
            <b>Raj Patel</b>
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Computer Science. Technophile.<br />
            Learner.
          </p>
          <div>
            <Link
              
              to='about me'
              smooth
              duration={500}
              className='group text-white w-fit px-5 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700 cursor-pointer'
            >
              {/* Added some Tailwind CSS functions in About Me button */}
              About Me
              <span className='group-hover:rotate-90'>
                <MdOutlineKeyboardArrowRight className='text-white ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Self}
            alt='my profile pic'
            className='rounded-3xl mx-auto w-2/3 md:w-full'
          />
          {/* for Home page add My Profile Image */}
        </div>
      </div>
    </div>
  );
};

export default Home;
