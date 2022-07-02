import React from 'react';

interface Props {
  children: any;
}

function Layout({ children }: Props) {
  return (
    <div className='bg-sky-200 px-4 pb-8 md:px-10'>
      {children}
    </div>
  );
}

export default Layout;