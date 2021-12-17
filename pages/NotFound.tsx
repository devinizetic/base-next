import React from 'react';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <h1>Not Found</h1>
      <Link href="/stories/new">Check new items</Link>
    </>
  );
};

export default NotFoundPage;
