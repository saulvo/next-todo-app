import Link from 'next/link';
import React from 'react';

const About: React.FC = () => {
  return (
    <>
      <p className='text-gray-700 dark:text-gray-300 pb-2'>
        Hello! I am Saul Vo, a Frontend Developer. Today I learned Next JS 13 by building a simple Todo App. I hope you like it.
      </p>
      <Link
        href='https://www.youtube.com/c/saulvo'
        target='_blank'
        rel='noopener noreferrer'
        className='block text-center text-lg text-white bg-red-500 rounded-2xl p-2 my-4'>
        My Youtube Channel
      </Link>
      <Link
        href='https://github.com/sonvt-fe'
        target='_blank'
        rel='noopener noreferrer'
        className='block text-center text-lg text-white bg-violet-500 rounded-2xl p-2 my-4'>
        My Github
      </Link>
      <Link
        href='https://saulvo.vercel.app'
        target='_blank'
        rel='noopener noreferrer'
        className='block text-center text-lg text-white bg-blue-500 rounded-2xl p-2 my-4'>
        My portfolio
      </Link>
    </>
  );
};

export default About;
