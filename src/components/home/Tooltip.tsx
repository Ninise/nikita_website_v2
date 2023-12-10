import React, { ReactNode } from 'react';

interface TooltipProps {
  message: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ message, children }) => {
  const TEXT_STYLE: string = 'text-sm text-white truncate ';
  const BUBBLE_STYLE: string = ' rounded-md bg-skill-tooltip-back px-4 py-2';

  return (
    <div className='group relative flex cursor-default'>
      {children}

      <div className='absolute top-14 left-5 z-30 scale-0 transition-all group-hover:scale-100 '>
        <div className='ps-2'>
          <div
            className='w-0 h-0
  border-l-[10px] border-l-transparent
  border-b-[15px] border-b-skill-tooltip-back
  border-r-[10px] border-r-transparent'></div>
        </div>

        <span className={' ' + TEXT_STYLE + BUBBLE_STYLE}>{message}</span>
      </div>
    </div>
  );
};

export default Tooltip;
