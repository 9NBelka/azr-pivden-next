import styles from './WhyChooseUs.module.scss';

const reasons = [
  {
    num: '01',
    title: 'ДОСВІД І СПЕЦІАЛІЗАЦІЯ',
    text: 'Понад 20 років ремонтуємо авто. 20+ робочих постів для японських та VAG марок',
  },
  {
    num: '02',
    title: 'ЧЕСНА ДІАГНОСТИКА',
    text: "Визначимо реальну проблему без нав'язаних ремонтів — платите лише за потрібне",
  },
  {
    num: '03',
    title: 'ГАРАНТІЯ НА РОБОТИ',
    text: 'Працюємо лише з перевіреними запчастинами і даємо гарантію на всі виконані роботи',
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section} id='whyus'>
      <div className={styles.container}>
        <div className={styles.containerTwoSides}>
          <div className={styles.left}>
            <img className={styles.bgDecor} src='/images/scheme-decor.png' alt='scheme-decor' />
            <div className={styles.content}>
              <p className={styles.eyebrow}>/ ЧОМУ ОБИРАЮТЬ НАС</p>
              <h3 className={styles.heading}>
                Ремонтуємо авто,
                <br />
                яким ви довіряєте
              </h3>
              <p className={styles.subtext}>
                Спеціалізуємось на японських та VAG автомобілях. Більше 20 років — чесний сервіс,
                перевірені запчастини, гарантія на роботи.
              </p>
              <div className={styles.reasons}>
                {reasons.map((r, i) => (
                  <div key={i} className={styles.reasonRow}>
                    <div className={styles.numCol}>
                      <div className={styles.numBadge}>{r.num}</div>
                      {i < reasons.length - 1 && <div className={styles.connector} />}
                    </div>
                    <div className={styles.reasonText}>
                      <h3 className={styles.reasonTitle}>{r.title}</h3>
                      <p className={styles.reasonDesc}>{r.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <img src='/images/mechanik-work.jpg' alt='mechanik-work' className={styles.photo} />
          </div>
        </div>
      </div>
    </section>
  );
}
