import { ReactNode } from 'react';

const ScreenSizer = ({ children }: { children: ReactNode }) => {
  return <div className='max-w-screen-lg mx-auto px-4'>{children}</div>;
};

export default ScreenSizer;
