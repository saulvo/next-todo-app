'use client';
import { cva } from 'class-variance-authority';
import React, { useState } from 'react';
import Banner from './Banner';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}
const Navigator: React.FC<Props> = ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <main className='relative min-h-screen overflow-x-hidden flex w-full'>
      <div className={sidebar({ active })}>sidebar</div>
      <div className={content({ active })}>
        <Header isActiveNav={active} onButtonClick={() => setActive((x) => !x)} />
        <Banner title='What&#39;s up, Saul Vo!' src='/welcome.png' />
        <div className='relative flex-1'>{children}</div>
      </div>
    </main>
  );
};

export default Navigator;

const sidebar = cva(['bg-red-600 absolute top-0 w-3/4  h-full transition-all duration-300'], {
  variants: {
    active: {
      true: ['left-0'],
      false: ['-left-3/4'],
    },
  },
  defaultVariants: {
    active: false,
  },
});

const content = cva(['absolute top-0 flex flex-col w-full h-screen p-4 transition-all duration-300'], {
  variants: {
    active: {
      true: ['left-3/4'],
      false: ['left-0'],
    },
  },
  defaultVariants: {
    active: false,
  },
});
