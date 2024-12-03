import { IConnectionPages } from './IConnectionPages';

export const ConnectionPagesContainer = ({ children }: IConnectionPages) => {
  return (
    <section className='w-full h-full flex flex-col gap-5 justify-center items-center'>
      {children}
    </section>
  );
};
