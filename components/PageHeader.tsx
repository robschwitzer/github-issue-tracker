import React from 'react';
import Link from "next/link";

interface Props {
  url: string;
}

function PageHeader({ url }: Props) {
  return (
    <div className='flex flex-col md:flex-row w-full justify-between h-24 antialiased font-bold'>
      <Link href="/"><h1 className='text-2xl cursor-pointer'>GitHub Issue Viewer</h1></Link>
      <a href={url} rel="noopener noreferrer" className='cursor-pointer underline'>{url}</a>
    </div>
  );
}

export default PageHeader;