import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className='px-20  pt-6 before:-z-10 bg-light-purple w-screen h-screen before:absolute before:-top-9 before:-left-5 before:content-[url("/assets/blob-top-left.svg")]  bg-no-repeat bg-right-blob-position bg-[url("/assets/blob-bottom-right.svg")]'>
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
