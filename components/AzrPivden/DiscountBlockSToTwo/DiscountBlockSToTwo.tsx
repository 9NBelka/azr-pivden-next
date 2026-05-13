'use client';

import Marquee from 'react-fast-marquee';
import styles from './DiscountBlockSToTwo.module.scss';

const texts = Array(6).fill('на перше замовлення знижка -15%');

export default function DiscountBlockSToTwo() {
  return (
    <div className={styles.discountBlock}>
      <Marquee speed={50} gradient={false}>
        {texts.map((text, index) => (
          <div key={index} className={styles.trustedScreenBlock}>
            <p>{text}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
