import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import photos from '../../assets/photos/index';

function Headshot({ size }: { size?: 'lg' }) {
  const divWidth = size == 'lg' ? 'w-20' : 'w-10';
  const divHeight = size == 'lg' ? 'h-20' : 'h-10';
  return (
    <Link href="/about">
      <a className={divHeight}>
        <div className={clsx(divWidth, 'rounded-full mb-4 bg-black hover:scale-110 transform transition ease-in-out duration-700')}>
          <Image src={photos.headshot} alt="Facundo Martin logo image" width={50} height={50} layout="responsive" className="rounded-full" />
        </div>
      </a>
    </Link>
  );
}

export default Headshot;
