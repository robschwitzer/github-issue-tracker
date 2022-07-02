import React from 'react';

interface Props {
  children: any;
}

function Layout({ children }: Props) {
  return (
    <div className='bg-sky-200'>
      {children}
    </div>
  );
}

export default Layout;