import React from 'react';

function About() {
  return (
    <div
    name='about me'
     className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center'>
      <div className='max-w-screen-lg p-4 max-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
        </div>
        <p>
          Hello! My name is Raj, and I am thrilled to share a bit about myself. I am a passionate individual with a deep
          interest in technology and its ever-evolving world. Currently, I am pursuing my <span className='font-bold'>Master's in Computer Science</span> at the University of the Pacific, where I am immersing myself in the exciting realms of cutting-edge technology, software development, and innovative problem-solving.
        </p>
        <br />
        <p>
          I have a strong passion for solving challenging problems and automating tasks. Additionally, I enjoy engaging in
          puzzle-solving activities like Sudoku, as it connects me to the thrill of problem-solving in a fun way. I also
          love having conversations about life and cultures, as it provides me with different perspectives that enhance my
          analytical and problem-solving skills. Together, these experiences fuel my drive to explore innovative solutions
          and continuously improve my problem-solving abilities.
        </p>
        <br />
        <div>
          <p className='text-2xl font-bold inline border-b-4 border-gray-500'>Education:</p>
          <br />
          <div>
            <p className='font-bold'>Master's of Science in Computer Science</p>
            <p>University of the Pacific</p>
            <p>Expected Graduation May 2024</p>
            <p>Currently pursuing my Master's in Computer Science.</p>
          </div>
          <br />
          <div>
            <p className='font-bold'>Bachelor's of Engineering in Computer Engineering</p>
            <p>LDRP Institute of Technology and Research</p>
            <p>07/2017 - 05/2021</p>
            <p>Joined to pursue Bachelor's in Engineering in Computer Engineering. Graduated in 2021 with an overall GPA of 8.50.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
