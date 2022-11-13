import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggleButton from './ThemeToggleButton';

interface Props {
  isActiveNav: boolean;
  onButtonClick: () => void;
}

const Header: React.FC<Props> = ({ isActiveNav, onButtonClick }) => {
  return (
    <header className='flex h-10 justify-between items-center'>
      <button type='button' title='Menu' className='text-3xl' onClick={onButtonClick}>
        {isActiveNav ? <FaTimes /> : <FaBars />}
      </button>
      <ThemeToggleButton />
    </header>
  );
};

export default Header;
