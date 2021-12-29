import React, { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navbar } from '../components/Navbar';

const queryClient = new QueryClient();

export default function getAdminLayout(page: ReactElement) {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Navbar />
        {page}
      </>
    </QueryClientProvider>
  );
}
