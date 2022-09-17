import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import image1 from '../../assets/photos/image-1.jpg';
import image2 from '../../assets/photos/image-2.jpg';
import image3 from '../../assets/photos/image-3.jpg';
import image4 from '../../assets/photos/image-4.jpg';
import image5 from '../../assets/photos/image-5.jpg';

const images = [image1, image2, image3, image4, image5];

function HomePhotos() {
  const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

  return (
    <section className="pt-16 sm:pt-20 section">
      <div className="-my-4 flex justify-center gap-5 overflow-visible py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image src={image} alt="" sizes="(min-width: 640px) 18rem, 11rem" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomePhotos;
