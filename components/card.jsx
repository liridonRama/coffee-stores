import Image from 'next/image';
import Link from 'next/link';

/**
 *
 * @param {{name: string; imageUrl: string; href: string;}} props
 * @returns {}
 */
export default function Card(props) {
  return (
    <Link href={props.href}>
      <a>
        <h2>{props.name}</h2>
        <Image src={props.imageUrl} width={260} height={160} />
      </a>
    </Link>
  );
}
