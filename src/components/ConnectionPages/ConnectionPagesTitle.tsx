import { IConnectionPages } from './IConnectionPages';

export const ConnectionPagesTitle = ({ children }: IConnectionPages) => {
  return (
    <h2 className='font-alumini-sans text-5xl text-chocolate tracking-[4px]'>
      {children}
    </h2>
  );
};
