import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import photos from '../../assets/photos/index';
const images = [photos.image1, photos.image2, photos.image3, photos.image4, photos.image5];

function HomePhotos() {
  const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

  return (
    <section className="pt-16 sm:pt-20 section">
      <div className="-my-4 flex justify-center gap-5 overflow-visible py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[8/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image src={image} alt="" height={1000} width={800} className=" object-cover" priority />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomePhotos;
