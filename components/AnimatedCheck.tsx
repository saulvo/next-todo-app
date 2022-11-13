'use client';
import React, { useState } from 'react';
import { cva } from 'class-variance-authority';

interface Props {}
const AnimatedCheck: React.FC<Props> = ({}) => {
  const [active, setActive] = useState(false);
  return (
    <div onClick={() => setActive((x) => !x)} className='relative w-8 h-8 rounded bg-black/10 dark:bg-white/10'>
      <div className={path({ type: 'left', active })} />
      <div className={path({ type: 'right', active })} />
    </div>
  );
};

export default AnimatedCheck;

const path = cva(['absolute top-0 block w-[10px] h-1 bg-red-600 transition-all duration-300'], {
  variants: {
    type: {
      left: [''],
      right: [''],
    },
    active: {
      true: [''],
    },
  },
  defaultVariants: {
    active: false,
  },
});
