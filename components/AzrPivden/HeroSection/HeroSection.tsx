'use client';

import MarqueeModuleMarksAuto from '../MarqueeModuleMarksAuto/MarqueeModuleMarksAuto';
import styles from './HeroSection.module.scss';
import { BsFillTelephoneFill } from 'react-icons/bs';

export default function HeroSection() {
  return (
    <>
      <section id='hero' className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <div className={styles.leftSide}>
              <h1 className={styles.title}>
                Ремонт <br /> японських та VAG автомобілів у <br /> Харкові
              </h1>
              <h2 className={styles.description}>
                ГРМ • Ходова • Радіатор печі • ТО • Розвал-сходження
              </h2>
              <p className={styles.marcksAutoText}>
                Toyota • Nissan • Honda • Mazda • Mitsubishi • Suzuki VW • Audi • Skoda • Ford • KIA
                • Lexus
              </p>
              <div
                className={styles.buttonBlock}
                onClick={() =>
                  document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })
                }>
                <button className={styles.primaryButton} id='buttonSendToContact'>
                  <BsFillTelephoneFill className={styles.buttonIcon} />
                  Записатися зараз
                </button>
              </div>
            </div>
            <div className={styles.rightSide}>
              <img className={styles.mapImage} src='/images/hero/hero-block-map.png' alt='map' />
              <img className={styles.carImage} src='/images/hero/hero-block-nissan.png' alt='car' />
            </div>
          </div>
        </div>
        <MarqueeModuleMarksAuto />
      </section>
    </>
  );
}
