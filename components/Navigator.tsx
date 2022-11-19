'use client';
import { cva } from 'class-variance-authority';
import { _nav } from 'constants/nav';
import { usePathname } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
import Banner from './Banner';
import Header from './Header';
import Sidebar from './Sidebar';

interface Props {
  children: React.ReactNode;
}
const Navigator: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  const toggleSidebar = () => {
    setActive((x) => !x);
  };

  const nav = useMemo(() => {
    return _nav.find((item) => item.link === pathname) || null;
  }, [pathname]);

  useEffect(() => {
    toggleSidebar();
  }, [pathname]);

  return (
    <main className='relative min-h-screen overflow-x-hidden flex w-full'>
      <div className={sidebar({ active })}>
        <Sidebar nav={_nav} />
      </div>
      <div className={content({ active })}>
        <Header isActiveNav={active} onButtonClick={toggleSidebar} />
        {nav && <Banner title={nav.title} src={nav.photo} />}
        <div className='relative flex-1'>{children}</div>
      </div>
    </main>
  );
};

export default Navigator;

const sidebar = cva(['bg-[#ccc] dark:bg-[#111] absolute top-0 w-3/4  h-full transition-all duration-300'], {
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
