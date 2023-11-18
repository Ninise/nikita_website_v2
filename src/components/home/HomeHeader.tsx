import React from 'react';

type HomeHeaderProps<T> = {
  fun: T;
};

export const HomeHeader: React.FC<HomeHeaderProps<() => void>> = ({ fun }) => {
  return (
    <section>
      <nav className='fixed top-0 right-0'>
        <div className=' items-center justify-between mx-auto p-24 max-xl:px-8'>
          <button
            className='content-center px-5 py-2 bg-menu-button text-dark-blue hover:text-menu-button hover:bg-dark-blue hover:fill-white fill-dark-blue rounded-lg'
            onClick={() => {
              fun();
            }}>
            <div className='inline-flex items-center space-x-4'>
              <svg
                width='22'
                height='18'
                viewBox='0 0 24 18'
                xmlns='http://www.w3.org/2000/svg'>
                <rect
                  y='0.5'
                  width='24'
                  height='3'
                  rx='0.3'
                />
                <rect
                  y='7.5'
                  width='24'
                  height='3'
                  rx='0.3'
                />
                <rect
                  y='14.5'
                  width='24'
                  height='3'
                  rx='0.3'
                />
              </svg>

              <p className='text-lg  font-medium'>MENU</p>
            </div>
          </button>
        </div>
      </nav>
    </section>
  );
};
