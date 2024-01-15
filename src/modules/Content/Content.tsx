import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '~/routes';

export const Content = () => {
  return (
    <Suspense fallback={<div></div>}>
      <RouterProvider router={router} />;
    </Suspense>
  );
};
