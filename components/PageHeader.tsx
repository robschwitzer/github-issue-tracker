import { useContext } from 'react';
import Image from 'next/image';
import Link from "next/link";

import HeaderContext from "context/headerContext";

function PageHeader() {  
  const { logo, url } = useContext(HeaderContext);
  return (
    <>
      <div className='flex flex-col md:flex-row w-full my-6 justify-between md:items-center'>
        <Link href="/"><a className='text-2xl font-bold cursor-pointer h-min'>GitHub Issue Viewer 🔮</a></Link>
        <div className='flex flex-row items-center mt-4 md:mt-0'>
          {logo && (
            <div className='relative flex w-8 h-8 mr-4 rounded-full overflow-hidden'>
              <Image src={logo} layout="fill" />
            </div>
          )}
          {url && (
            <a href={url} rel="noopener noreferrer" className='cursor-pointer h-min underline'>{url}</a>
          )}
        </div>
      </div>
      <span className='h-px w-full mb-8 bg-slate-600' />
    </>
  );
}

export default PageHeader;