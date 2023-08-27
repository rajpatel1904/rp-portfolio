import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import movie from '../assets/movie.png';
import speech from '../assets/speech_to_text.jpg';

const Projects = () => {
  const githubRepoUrl1 = 'https://github.com/rajpatel1904/content_based-movie-recommendation_system.git';
  // Add details for two more projects
  const githubRepoUrl2 = 'https://github.com/yourusername/project2.git';
  const githubRepoUrl3 = 'https://github.com/yourusername/project3.git';
  
  return (
    <div
    name='projects' 
    className='w-full h-screen bg-gray-800 text-white flex items-center justify-center'>
      <div className='max-w-screen-lg p-4 max-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
        </div>
        <div className='flex flex-row justify-center'>
          {/* First project */}
          <div className='w-80 m-4 rounded-xl overflow-hidden'>
            <a href={githubRepoUrl1} target='_blank' rel='noopener noreferrer'>
              <div className="project-image-container">
                <img
                  src={movie}
                  alt='project image'
                  className='w-full h-56 object-cover cursor-pointer'
                />
              </div>
            </a>
            <div className='p-4 bg-gray-700'>
              <h3 className='text-xl font-bold'>Project Title</h3>
              <p className='text-gray-300'>
                Project description goes here...
              </p>
              <a
                href={githubRepoUrl1}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 flex items-center mt-2 cursor-pointer'
              >
                View on GitHub <MdOutlineKeyboardArrowRight className='ml-1' />
              </a>
            </div>
          </div>

          {/* Second project */}
          <div className='w-80 m-4 rounded-xl overflow-hidden'>
            <a href={githubRepoUrl2} target='_blank' rel='noopener noreferrer'>
              {/* Replace 'movie' with the image for your second project */}
              <div className="project-image-container">
                <img
                  src={speech}
                  alt='project image'
                  className='w-full h-56 object-cover cursor-pointer'
                />
              </div>
            </a>
            <div className='p-4 bg-gray-700'>
              <h3 className='text-xl font-bold'>Project Title 2</h3>
              <p className='text-gray-300'>
                Project 2 description goes here...
              </p>
              <a
                href={githubRepoUrl2}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 flex items-center mt-2 cursor-pointer'
              >
                View on GitHub <MdOutlineKeyboardArrowRight className='ml-1' />
              </a>
            </div>
          </div>

          {/* Third project */}
          <div className='w-80 m-4 rounded-xl overflow-hidden'>
            <a href={githubRepoUrl3} target='_blank' rel='noopener noreferrer'>
              {/* Replace 'movie' with the image for your third project */}
              <div className="project-image-container">
                <img
                  //src={}
                  alt='project image'
                  className='w-full h-56 object-cover cursor-pointer'
                />
              </div>
            </a>
            <div className='p-4 bg-gray-700'>
              <h3 className='text-xl font-bold'>Project Title 3</h3>
              <p className='text-gray-300'>
                Project 3 description goes here...
              </p>
              <a
                href={githubRepoUrl3}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 flex items-center mt-2 cursor-pointer'
              >
                View on GitHub <MdOutlineKeyboardArrowRight className='ml-1' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
