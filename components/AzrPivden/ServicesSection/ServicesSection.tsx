'use client';

import { useEffect, useState } from 'react';
import styles from './ServicesSection.module.scss';
import { BsFillTelephoneFill, BsSliders, BsX } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import type { ReactNode } from 'react';

interface Service {
  icon?: ReactNode;
  iconImage?: string;
  title: string;
  description: string;
  price: string;
  idCard: string;
  modal: {
    image: string;
    bigDescription: string;
  };
}

const services: Service[] = [
  {
    iconImage: './images/ServicesSection/timing-belt-replacement.png',
    title: 'Заміна ременя ГРМ',
    description:
      'Почули гул, свист, писк чи стукіт під капотом? Не відкладайте заміну ременя ГРМ в АЗР Південний. ',
    price: 'від 4000 грн',
    idCard: 'timing-belt-replacement',
    modal: {
      image: './images/timing-belt-replacement.jpg',
      bigDescription:
        'Заміна ременя ГРМ - це необхідна процедура, яка уберігає двигун від дорогого ремонту. Ми дотримуємось регламентів виробника, використовуємо спеціальні фіксатори для точної установки фаз ГРМ і обов’язково перевіряємо супутні елементи - ролики, помпу, сальники та шестерні. Рекомендуємо комплексну заміну комплекту, щоб гарантувати ресурс і надійність роботи двигуна. Працюємо тільки з перевіреними запчастинами та надаємо гарантію на весь міжсервісний період.',
    },
  },
  {
    // icon: <MdOutlineBuild className={styles.cardIcon} />,
    iconImage: './images/ServicesSection/suspension-repair.png',
    title: 'Ремонт ходової',
    description:
      'Стукіт, скрип, вібрація або тягне кермо? Не відкладайте ремонт підвіски в АЗР Південний ',
    price: 'від 500 грн',
    idCard: 'suspension-repair',
    modal: {
      image: './images/suspension-repair.jpg',
      bigDescription:
        'Ремонт ходової частини на СТО АЗР Південний - це комплексна діагностика та професійне усунення зносу підвіски, рульового управління та пов’язаних елементів. Ми відновлюємо стійкість, керованість і комфорт автомобіля, використовуючи спеціалізований інструмент та тільки перевірені запчастини . Своєчасний ремонт ходової підвищує безпеку на дорозі, продовжує ресурс авто та запобігає дорогим поломкам, гарантуючи стабільну і надійну роботу вашого автомобіля в будь-яких умовах.',
    },
  },
  {
    // icon: <FaCarSide className={styles.cardIcon} />,
    iconImage: './images/ServicesSection/wheel-alignment-adjustment.png',
    title: 'Регулювання розвалу-сходження',
    description:
      'Тягне кермо чи кидає машину, нерівно стоїть руль або  їсть резину? Перевірте розвал-сходження в АЗР Південний.',
    price: 'від 700 грн',
    idCard: 'wheel-alignment-adjustment',
    modal: {
      image: './images/wheel-alignment-adjustment.jpg',
      bigDescription:
        'Регулювання розвал-сходження - це точне налаштування кутів установки коліс, від якого залежать керованість, безпека та рівномірний знос шин. Якщо авто тягне вбік, з’явився нерівномірний знос гуми або відчувається нестабільність на дорозі — варто перевірити геометрію підвіски. На СТО АЗР Південний регулювання виконується на сучасному 3D стенді Hunter 3D, з попередньою діагностикою ходової частини та фінальною перевіркою результату. Це гарантує точність налаштування, комфорт у керуванні та максимальний ресурс ваших шин.',
    },
  },
  {
    iconImage: './images/ServicesSection/oil-change.png',
    title: 'Заміна масла',
    description:
      'Загорівся значок масла, нагадування про ТО або двигун працює шумніше? Запишіться на заміну масла в АЗР Південний. ',
    price: 'від 600 грн',
    idCard: 'oil-change',
    modal: {
      image: './images/oil-change.jpg',
      bigDescription:
        'Заміна масла та технічних рідин на СТО АЗР Південний - це гарантія стабільної роботи та довговічності вашого автомобіля. Ми виконуємо заміну моторного й трансмісійного масел, гальмівної рідини, рідини ГУР та інших експлуатаційних матеріалів відповідно до регламенту виробника з обов’язковою заміною фільтрів. Підбираємо за допусками виробника, правильну в’язкість з урахуванням умов експлуатації та рекомендуємо оптимальні інтервали обслуговування. Використовуємо лише оригінальні рідини від офіційних постачальників і завдяки власному складу запчастин забезпечуємо швидке та якісне виконання робіт без зайвих витрат.',
    },
  },
  {
    // icon: <FaLink className={styles.cardIcon} />,
    iconImage: './images/ServicesSection/timing-chain-replacement.png',
    title: 'Заміна ланцюга ГРМ',
    description:
      'Чуєте металевий брязкіт, торохтіння під капотом чи блимає Check Engine ? Термінова заміна ланцюга ГРМ в АЗР Південний.',
    price: 'від 6000 грн',
    idCard: 'timing-chain-replacement',
    modal: {
      image: './images/timing-chain-replacement.jpg',
      bigDescription:
        'Заміна ланцюга ГРМ - відповідальна процедура, яка потребує точної діагностики та професійного підходу, адже зношений ланцюг може призвести до серйозних пошкоджень двигуна. Якщо ви помітили нерівну роботу двигуна, втрату потужності, сторонній шум або помилки по фазах ГРМ - не зволікайте з перевіркою. На СТО АЗР Південний ми використовуємо спеціальні фіксатори та дотримуємось технічної документації виробника, комплексно міняємо комплект приводу (ланцюг, натягувачі, заспокоювачі, зірки), працюємо лише з перевіреними запчастинами. Надаємо гарантію на весь міжсервісний період і забезпечуємо надійну та стабільну роботу вашого двигуна.',
    },
  },
  {
    // icon: <FaTools className={styles.cardIcon} />,
    iconImage: './images/ServicesSection/engine-repair.png',
    title: 'Ремонт двигуна',
    description:
      'Машина димить, троїть двигун, велика витрата мастила чи зникла тяга? Професійний ремонт двигуна в АЗР Південний.',
    price: 'від 20000 грн',
    idCard: 'engine-repair',
    modal: {
      image: './images/engine-repair.jpg',
      bigDescription:
        'Ремонт двигуна - це професійний підхід до найскладніших робіт із гарантією якості та повною прозорістю процесу. Виконуємо діагностику, ремонт ГБЦ, заміну ГРМ, сальників і прокладок, а також капітальний ремонт бензинових і дизельних двигунів. Проводимо ретельну дефектовку, обмір деталей та механічну обробку з дотриманням заводських допусків, використовуючи сучасне обладнання та перевірені запчастини. Це забезпечує відновлення потужності, надійну роботу та довгий ресурс вашого двигуна.',
    },
  },
  {
    iconImage: './images/ServicesSection/auto-electrical-repair.png',
    title: 'Ремонт електрики',
    description:
      'Горить Check Engine, авто не заводиться або зникло світло? Якісний ремонт автоелектрики в АЗР Південний. ',
    price: 'від 500 грн',
    idCard: 'auto-electrical-repair',
    modal: {
      image: './images/auto-electrical-repair.jpg',
      bigDescription:
        'Ремонт електрики на СТО АЗР Південний - це точна діагностика та професійне усунення несправностей будь-якої складності. Якщо з’явилися помилки на панелі приладів, проблеми із запуском, освітленням, зарядкою або роботою електронних систем - ми швидко визначимо причину та якісно її усунемо. Використовуємо сучасне діагностичне обладнання, працюємо з проводкою, блоками керування та датчиками, забезпечуючи стабільну й безпечну роботу всіх електросистем вашого автомобіля.',
    },
  },
  {
    // icon: <FaCarCrash className={styles.cardIcon} />,
    iconImage: './images/ServicesSection/brake-system-repair.png',
    title: 'Ремонт гальмівної системи',
    description:
      'Б’є руль при гальмуванні, скриплять колодки чи провалилася педаль? Терміновий ремонт гальм в АЗР Південний. ',
    price: 'від 600 грн',
    idCard: 'brake-system-repair',
    modal: {
      image: './images/brake-system-repair.jpg',
      bigDescription:
        'Ремонт гальмівної системи на СТО АЗР Південний - це гарантія вашої безпеки на дорозі. Якщо з’явився великий хід педалі, вібрація, скрип, авто пригальмовує або горять індикатори ABS чи ESP - необхідна професійна діагностика. Ми виконуємо повне обслуговування гальм: заміну колодок і дисків, ремонт супортів, перевірку гідросистеми та обов’язкову заміну гальмівної рідини за регламентом. Використовуємо якісні запчастини, дотримуємось технічних норм виробника та забезпечуємо надійну і прогнозовану роботу гальмівної системи.',
    },
  },
  {
    // icon: <MdOutlineCarRepair className={styles.cardIcon} />,
    iconImage: './images/ServicesSection/shock-absorber-replacement.png',
    title: 'Заміна амортизаторів',
    description:
      'Машина гойдається, стукає підвіска на ямах чи потекли амортизатори? Професійна заміна амортизаторів в АЗР Південний. ',
    price: 'від 700 грн',
    idCard: 'shock-absorber-replacement',
    modal: {
      image: './images/shock-absorber-replacement.jpg',
      bigDescription:
        'Заміна амортизаторів - це відновлення керованості, стабільності та безпеки вашого автомобіля. Якщо авто «плаває» на дорозі, збільшився гальмівний шлях, з’явилися сторонні шуми або нерівномірний знос шин - варто перевірити підвіску. На СТО АЗР Південний ми професійно діагностуємо стан амортизаторів, виконуємо заміну парою на одній осі, використовуємо спеціальні інструменти для правильного монтажу та встановлюємо лише перевірені запчастини. Це гарантує довгий ресурс, комфорт у керуванні та впевненість на будь-якій дорозі.',
    },
  },
  {
    iconImage: './images/ServicesSection/air-conditioning-system-repair.png',
    title: 'Ремонт системи кондиціонування',
    description:
      'Не холодить кондиціонер, з’явився неприємний запах чи дме тепле повітря? Заправка та Ремонт кондиціонера в АЗР Південний. ',
    price: 'від 1000 грн',
    idCard: 'air-conditioning-system-repair',
    modal: {
      image: './images/air-conditioning-system-repair.jpg',
      bigDescription:
        'Ремонт та обслуговування системи кондиціонування на СТО. АЗР Південний забезпечує комфортну і безпечну температуру в салоні вашого автомобіля. Ми проводимо діагностику на витоки та несправності, промивку системи, заміну компресора, фільтрів і ущільнювачів, а також заправку холодоагентом та маслами. Додатково виконуємо антибактеріальну обробку та очищення повітропроводів за допомогою професійного обладнання, усуваючи неприємні запахи, бактерії та грибок. Використання сучасного обладнання та перевірених запчастин гарантує довговічну і надійну роботу кондиціонера.',
    },
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const update = () => {
      setVisibleCount(window.innerWidth <= 600 ? 3 : 8);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const openModal = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id='services' className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Наші послуги</h2>

          <p className={styles.description}>Професійне обслуговування автомобілів</p>
        </div>

        <div className={styles.allCards}>
          {services.slice(0, visibleCount).map((service) => (
            <div
              key={service.idCard}
              className={styles.card}
              id={service.idCard}
              onClick={() => openModal(service)}>
              <div className={styles.cardHeader}>
                {service.icon && <div className={styles.iconContainer}>{service.icon}</div>}

                {service.iconImage && (
                  <div className={styles.iconContainer}>
                    <img src={service.iconImage} alt={service.title} />
                  </div>
                )}

                <div className={styles.cardTitle}>{service.title}</div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardDescription}>{service.description}</div>
              </div>
            </div>
          ))}

          <div className={`${styles.extraCardsWrapper} ${expanded ? styles.expanded : ''}`}>
            {services.slice(visibleCount).map((service) => (
              <div
                key={service.idCard}
                className={styles.card}
                id={service.idCard}
                onClick={() => openModal(service)}>
                <div className={styles.cardHeader}>
                  {service.iconImage && (
                    <div className={styles.iconContainer}>
                      <img src={service.iconImage} alt={service.title} />
                    </div>
                  )}

                  <div className={styles.cardTitle}>{service.title}</div>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardDescription}>{service.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.allPositionsBlock}>
          <button className={styles.allPositions} onClick={() => setExpanded((prev) => !prev)}>
            <BsSliders className={styles.allPositionsIcon} />

            {expanded ? 'Сховати' : 'Всі послуги'}
          </button>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>Не знайшли потрібну послугу? Зв`яжіться з нами</p>

          <button
            className={styles.ctaButton}
            onClick={() =>
              document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })
            }>
            <BsFillTelephoneFill className={styles.buttonIcon} />
            Записатися на консультацію
          </button>
        </div>
      </div>

      {selectedService && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <BsX className={styles.closeIcon} onClick={closeModal} />

            <div className={styles.modalBlockFlex}>
              <h3 className={styles.modalTitle}>{selectedService.title}</h3>

              <img
                src={selectedService.modal.image}
                alt={selectedService.title}
                className={styles.modalImage}
              />

              <p className={styles.modalDescription}>{selectedService.modal.bigDescription}</p>

              <div className={styles.callButtonBlock}>
                <a href='tel:+380671155120' className={styles.callButton}>
                  <FiPhoneCall className={styles.iconPhone} />
                  Подзвонити
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
