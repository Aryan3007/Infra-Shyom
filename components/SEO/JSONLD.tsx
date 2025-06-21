
import Head from 'next/head';
import { FC } from 'react';

interface JSONLDProps {
  data: object;
}

const JSONLD: FC<JSONLDProps> = ({ data }) => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
};

export default JSONLD;
