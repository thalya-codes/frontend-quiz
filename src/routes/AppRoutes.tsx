import { Layout } from '@/layout';
import { Route, Routes } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<div>Home</div>} />
      </Route>
    </Routes>
  );
}
