import React from 'react';
import Link from 'next/link';

type HomeMenuProps = {
  fun: () => void;
};

export const HomeMenu: React.FC<HomeMenuProps> = ({ fun }) => {
  return (
    <div className='fixed z-30 w-full h-full bg-white dark:bg-black flex flex-col'>
      <div className='flex justify-between items-center px-6 py-5 border-b border-black/5 dark:border-white/5'>
        <span className='text-black dark:text-white text-sm font-bold tracking-widest'>NN</span>
        <button
          onClick={fun}
          className='text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 28 28' fill='none'>
            <path
              d='M13.9999 15.6333L8.28327 21.35C8.06938 21.5639 7.79716 21.6708 7.4666 21.6708C7.13605 21.6708 6.86382 21.5639 6.64993 21.35C6.43605 21.1361 6.3291 20.8639 6.3291 20.5333C6.3291 20.2028 6.43605 19.9306 6.64993 19.7167L12.3666 14L6.64993 8.28333C6.43605 8.06944 6.3291 7.79722 6.3291 7.46666C6.3291 7.13611 6.43605 6.86388 6.64993 6.65C6.86382 6.43611 7.13605 6.32916 7.4666 6.32916C7.79716 6.32916 8.06938 6.43611 8.28327 6.65L13.9999 12.3667L19.7166 6.65C19.9305 6.43611 20.2027 6.32916 20.5333 6.32916C20.8638 6.32916 21.136 6.43611 21.3499 6.65C21.5638 6.86388 21.6708 7.13611 21.6708 7.46666C21.6708 7.79722 21.5638 8.06944 21.3499 8.28333L15.6333 14L21.3499 19.7167C21.5638 19.9306 21.6708 20.2028 21.6708 20.5333C21.6708 20.8639 21.5638 21.1361 21.3499 21.35C21.136 21.5639 20.8638 21.6708 20.5333 21.6708C20.2027 21.6708 19.9305 21.5639 19.7166 21.35L13.9999 15.6333Z'
              fill='currentColor'
            />
          </svg>
        </button>
      </div>

      <nav className='flex flex-col gap-2 px-6 pt-12'>
        {['#about', '#skills', '#experience', '#portfolio'].map((href, i) => {
          const label = href.replace('#', '');
          return (
            <Link
              key={i}
              href={href}
              onClick={fun}
              className='text-4xl font-bold text-black dark:text-white capitalize py-3 border-b border-black/5 dark:border-white/5 hover:text-green transition-colors duration-200'>
              {label}
            </Link>
          );
        })}
        <a
          href='mailto:nikitin.ninise@gmail.com'
          onClick={fun}
          className='text-4xl font-bold text-green py-3 mt-4'>
          Contact
        </a>
      </nav>
    </div>
  );
};
