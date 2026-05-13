'use client';

import styles from './AfterHeroScreen.module.scss';

const cards = [
  {
    num: '01',
    title: 'Заміна ременів та ланцюгів ГРМ',
    description: 'Захистіть двигун вчасно — замінимо ремінь або ланцюг ГРМ швидко й надійно.',
    image: '/images/AfterHeroScreen-chain-image.jpg',
    accent: true,
  },
  {
    num: '02',
    icon: '/images/chain-check-engine-icon.png',
    iconAlt: 'CHECK',
    title: 'Заміна олії та фільтрів',
    description: null,
    image: '/images/AfterHeroScreen-oil-image.jpg',
    accent: false,
  },
];

export default function AfterHeroScreen() {
  return (
    <section className={styles.section}>
      {cards.map((card, i) => (
        <div
          key={i}
          className={`${styles.card} ${card.accent ? styles.cardAccent : styles.cardDark}`}>
          <div className={styles.textBlock}>
            {card.icon && (
              <div className={styles.iconBlock}>
                <img src={card.icon} alt={card.iconAlt} className={styles.icon} />
              </div>
            )}
            <h3 className={styles.title}>
              {card.title.split('\n').map((line, j) => (
                <span key={j}>
                  {line}
                  <br />
                </span>
              ))}
            </h3>
            {card.description && <p className={styles.description}>{card.description}</p>}
            <button
              className={styles.btn}
              onClick={() =>
                document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })
              }>
              Записатись
            </button>
            <span className={styles.numDecor}>{card.num}</span>
          </div>
          <div className={styles.imageBlock}>
            <img src={card.image} alt={card.title} className={styles.image} />
          </div>
        </div>
      ))}
    </section>
  );
}
