import React from 'react';

function Experience() {
  return (
    <div
      name='experience'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center'
    >
      <div className='max-w-screen-lg p-4 max-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Professional Experience</p>
        </div>
        <p>
          <strong>Python Developer Intern</strong><br />
          <em>Shree Hari Technology, India</em><br />
          <em>August 2021 - January 2022</em>
        </p>
        
      </div>
    </div>
  );
}

export default Experience;
