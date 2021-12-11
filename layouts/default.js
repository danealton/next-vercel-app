import Head from 'next/head';

import Navigation from '../components/navigation';

const DefaultLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div>
        <Navigation />

        <div>
          { children }
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
