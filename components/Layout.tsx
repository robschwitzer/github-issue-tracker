interface Props {
  children: any;
}

function Layout({ children }: Props) {
  return (
    <div className='flex flex-col bg-sky-200 px-4 pb-8 md:px-10 min-h-screen'>
      {children}
    </div>
  );
}

export default Layout;