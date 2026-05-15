import styles from './StatsSection.module.scss';

const stats = [
  { num: '6832', label: 'ГОТОВИХ АВТОМОБІЛІВ', icon: '/images/StatsSection/luxury-car-icon.png' },
  { num: '671', label: 'ЗАМІНА ГРМ', icon: '/images/StatsSection/car-engine-icon.png' },
  { num: '1453', label: 'ЗАМІНА МАСЛА', icon: '/images/StatsSection/oil-icon.png' },
  { num: '1278', label: 'РОЗВАЛ СХОДЖЕННЯ', icon: '/images/StatsSection/wheel-icon.png' },
  { num: '117', label: 'КАП.РЕМОНТ ДВИГУНА', icon: '/images/StatsSection/engine-icon.png' },
  { num: '3919', label: 'ПРОВЕДЕНО ДІАГНОСТИК', icon: '/images/StatsSection/diagnostic-icon.png' },
  { num: '644', label: 'ЗАМІНА АМОРТИЗАТОРІВ', icon: '/images/StatsSection/amort-icon.png' },
];

const photos = [
  { src: '/images/StatsSection/amort-img.jpg', alt: 'Підвіска' },
  { src: '/images/StatsSection/oil-img.jpg', alt: 'Підйомник' },
  { src: '/images/StatsSection/diagnostic-img.jpg', alt: 'Діагностика' },
  { src: '/images/StatsSection/car-engine-img.jpg', alt: 'Ремонт двигуна' },
];

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <p className={styles.eyebrow}>/ АЗР У ЦИФРАХ</p>
        <h2 className={styles.heading}>
          За минулий рік нашим
          <br />
          клієнтам було
          <br />
          зроблено
        </h2>
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statItem}>
              <div className={styles.statTop}>
                <img src={s.icon} alt={s.label} />
                <div className={styles.textAbsolute}>
                  <p className={styles.statNum}>{s.num}</p>
                  <p className={styles.statLabel}>{s.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        {photos.map((p, i) => (
          <div key={i} className={styles.photoWrap}>
            <img src={p.src} alt={p.alt} className={styles.photo} />
          </div>
        ))}
      </div>
    </section>
  );
}
