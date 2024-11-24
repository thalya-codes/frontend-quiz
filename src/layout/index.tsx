import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className='bg-light-purple w-screen h-screen before:absolute before:-top-9 before:-left-5 before:content-[url("/assets/blob-top-left.svg")]  bg-no-repeat bg-right-blob-position bg-[url("/assets/blob-bottom-right.svg")]'>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
