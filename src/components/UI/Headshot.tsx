import Image from 'next/image';
import Link from 'next/link';
import photos from '../../assets/photos/index';

function Headshot() {
  return (
    <Link href="/about">
      <a>
        <div className="w-16 h-16 rounded-full mb-4 bg-black hover:scale-110 transform transition ease-in-out duration-700">
          <Image src={photos.headshot} alt="Facundo Martin logo image" width={50} height={50} layout="responsive" className="rounded-full" />
        </div>
      </a>
    </Link>
  );
}

export default Headshot;
