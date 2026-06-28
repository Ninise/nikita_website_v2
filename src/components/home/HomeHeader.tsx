'use client';

import Link from 'next/link';

type HomeHeaderProps = {
  fun: () => void;
};

export const HomeHeader = ({ fun }: HomeHeaderProps) => {
  return (
    <nav className='fixed top-0 w-full z-10 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-black/5 dark:border-white/5'>
      <div className='max-w-5xl mx-auto px-12 max-sm:px-6 py-5 flex justify-between items-center'>
        <a href='#' className='text-black dark:text-white text-sm font-bold tracking-widest'>
          NN
        </a>

        <div className='hidden sm:flex items-center gap-10'>
          <Link href='#about' className='text-black/40 dark:text-white/40 text-sm hover:text-black dark:hover:text-white transition-colors duration-200'>
            About
          </Link>
          <Link href='#skills' className='text-black/40 dark:text-white/40 text-sm hover:text-black dark:hover:text-white transition-colors duration-200'>
            Skills
          </Link>
          <Link href='#experience' className='text-black/40 dark:text-white/40 text-sm hover:text-black dark:hover:text-white transition-colors duration-200'>
            Experience
          </Link>
          <Link href='#portfolio' className='text-black/40 dark:text-white/40 text-sm hover:text-black dark:hover:text-white transition-colors duration-200'>
            Portfolio
          </Link>
          <Link
            href='#contact'
            className='text-black dark:text-white text-sm font-medium hover:text-green transition-colors duration-200'>
            Contact
          </Link>
        </div>

        <button className='sm:hidden text-black dark:text-white' onClick={fun}>
          <svg width='22' height='18' viewBox='0 0 24 18' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
            <rect y='0.5' width='24' height='3' rx='0.3' />
            <rect y='7.5' width='24' height='3' rx='0.3' />
            <rect y='14.5' width='24' height='3' rx='0.3' />
          </svg>
        </button>
      </div>
    </nav>
  );
};
