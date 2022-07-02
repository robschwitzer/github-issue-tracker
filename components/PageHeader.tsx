import React from 'react';
import Image from 'next/image';
import Link from "next/link";

interface Props {
  url: string;
  logo: string;
}

function PageHeader({ url, logo }: Props) {  
  return (
    <>
      <div className='flex flex-col md:flex-row w-full my-6 md:my-0 justify-between h-24 md:items-center font-bold'>
        <Link href="/"><a className='text-2xl cursor-pointer h-min'>GitHub Issue Viewer 🔮</a></Link>
        <div className='flex flex-row items-center'>
          {logo && (
            <div className='relative flex w-8 h-8 mr-4 rounded-full overflow-hidden'>
              <Image src={logo} layout="fill" />
            </div>
          )}
          <a href={url} rel="noopener noreferrer" className='cursor-pointer h-min underline'>{url}</a>
        </div>
      </div>
      <span className='h-px w-full mb-8 bg-slate-600' />
    </>
  );
}

export default PageHeader;