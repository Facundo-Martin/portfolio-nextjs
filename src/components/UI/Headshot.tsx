import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import photos from '../../assets/photos/index';

function Headshot({ width }: { width: number }) {
  return (
    <Link href="/about">
      <a className="h-10">
        <div className={clsx(`w-${width}`, 'rounded-full mb-4 bg-black hover:scale-110 transform transition ease-in-out duration-700')}>
          <Image src={photos.headshot} alt="Facundo Martin logo image" width={50} height={50} layout="responsive" className="rounded-full" />
        </div>
      </a>
    </Link>
  );
}

export default Headshot;
