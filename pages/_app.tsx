import '../styles/globals.css';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navbar } from '../components/Navbar';

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    </QueryClientProvider>
  );
}

export default MyApp;
