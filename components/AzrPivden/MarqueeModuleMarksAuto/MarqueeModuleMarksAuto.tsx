'use client';

import Marquee from 'react-fast-marquee';
import styles from './MarqueeModuleMarksAuto.module.scss';

const images = [
  'toyota',
  'nissan',
  'honda',
  'mazda',
  'mitsubishi',
  'suzuki',
  'volkswagen',
  'audi',
  'skoda',
  'ford',
  'kia',
];

export default function MarqueeModuleMarksAuto() {
  const allImages = [...images, ...images];
  return (
    <div className={styles.discountBlock}>
      <Marquee speed={50} gradient={false}>
        {allImages.map((name, index) => (
          <div key={index} className={styles.trustedScreenBlock}>
            <img src={`/images/carusel-marka-car-icon/${name}-icon.png`} alt={name} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
