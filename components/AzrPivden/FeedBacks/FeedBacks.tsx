'use client';

import Marquee from 'react-fast-marquee';
import styles from './FeedBacks.module.scss';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { SiGoogle } from 'react-icons/si';

const testimonials = [
  {
    name: 'Александр Бойко',
    text: 'Одно из лучших СТО Харькова, все проблемы с Ауди могут решить, а это сложно и не каждому под силу)',
    rating: 5,
  },
  {
    name: 'СаШа star',
    text: 'Обслуговуюсь на даному СТО постійно. Що зручно це комплекс, від діагностики до найскладнішого ремонту. Реально по машині чуваки роблять все. Команда збита та злагоджена, а тому працює як годинник. Однозначно РЕКОМЕНДУЮ АЗР Південний.',
    rating: 5,
  },
  {
    name: 'Світлана Міськевич',
    text: 'Проходила планове технічне обслуговування свого автомобіля. Залишилась задоволеною якістю наданих послуг. Усі роботи виконані вчасно, персонал привітний і професійний.',
    rating: 5,
  },
  {
    name: 'Сергей Мясоедов',
    text: 'звертались неодноразово, Вадим і компанія завжди помогали, дякую',
    rating: 5,
  },
  {
    name: 'Владислав Надкирничний',
    text: 'Заезжал на это СТО, в целом хорошо. Отдельное спасибо электрику этой стошки. Парень нашел решение проблемы за 5 минут.',
    rating: 5,
  },
  {
    name: 'Arthur Tarasov',
    text: 'Хороший сервис, сделали все быстро и по адекватной цене, рекомендую',
    rating: 5,
  },
  {
    name: 'Nikita Nemtsov',
    text: 'Обращался для замены передних амортизаторов. Работу выполнили аккуратно и в оговорённые сроки.',
    rating: 5,
  },
  {
    name: 'Артем Юшко',
    text: 'Чудове СТО з досвідченими майстрами! Провели заміну ланцюга ГРМ з фазорегуляторами, роботу виконали на вищому рівні та за адекватною ціною!',
    rating: 5,
  },
  {
    name: 'Ольга Стрельникова',
    text: 'Висловлюю велику подяку всій команді СТО АЗР Південний за оперативну і якісну роботу!',
    rating: 5,
  },
  {
    name: 'Марина Николаева',
    text: 'Круте СТО, у мене фольксваген поло, вже 5 років звертаюсь за допомогою. Знаходять рішення в самих складних випадках.',
    rating: 5,
  },
];

const Stars = ({ rating }: { rating: number }) => (
  <div className={styles.stars}>
    {Array.from({ length: 5 }).map((_, i) =>
      i < rating ? (
        <BsStarFill key={i} className={styles.starFilled} />
      ) : (
        <BsStar key={i} className={styles.starEmpty} />
      ),
    )}
  </div>
);

const ReviewCard = ({ item }: { item: (typeof testimonials)[0] }) => (
  <div className={styles.card}>
    <Stars rating={item.rating} />
    <p className={styles.text}>{item.text}</p>
  </div>
);

export default function FeedBacks() {
  return (
    <section className={styles.section} id='feedbacks'>
      <div className={styles.header}>
        <h2 className={styles.title}>Відгуки клієнтів</h2>
        <p className={styles.description}>
          Понад 1000 задоволених клієнтів довіряють нам свої автомобілі
        </p>
      </div>
      <Marquee speed={50} gradient={false}>
        <div className={styles.sliderWrapper}>
          <div className={styles.track}>
            {testimonials.map((item, i) => (
              <ReviewCard key={i} item={item} />
            ))}
          </div>
        </div>
      </Marquee>
      <div className={styles.footer}>
        <a
          href='https://www.google.com/maps/place/%D0%A1%D0%A2%D0%9E+%D0%90%D0%97%D0%A0+%D0%9F%D1%96%D0%B2%D0%B4%D0%B5%D0%BD%D0%BD%D0%B8%D0%B9/@49.985412,36.205966,20z'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.moreBtn}>
          <SiGoogle className={styles.btnIcon} />
          Читати більше відгуків
        </a>
      </div>
    </section>
  );
}
