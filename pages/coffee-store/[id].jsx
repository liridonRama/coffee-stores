import Head from 'next/head';
import { useRouter } from 'next/router';

/**
 *
 * @param {*} props
 * @returns
 */
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
