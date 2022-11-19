import { NavItemType } from 'interfaces';
import Image from 'next/image';
import React from 'react';
import NavLink from './NavLink';

interface Props {
  nav: NavItemType[];
}
const Sidebar: React.FC<Props> = ({ nav }) => {
  return (
    <div>
      <Image src='/avatar.jpg' alt='Saul Vo' width={160} height={160} className='mt-[12vh] mb-8 mx-auto rounded-full border-4 dark:border-gray-400' />
      <h1 className='text-3xl text-center font-bold'>Saul Vo</h1>
      <nav className='flex flex-col items-center mt-6'>
        {nav.map((item, idx) => (
          <NavLink key={idx} href={item.link}>
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
