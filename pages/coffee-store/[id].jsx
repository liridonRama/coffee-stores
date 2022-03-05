import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CoffeeStore(props) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{router.query.id}</title>
      </Head>
      <div className=''>Hello Coffee Store {router.query.id}</div>
    </>
  );
}
