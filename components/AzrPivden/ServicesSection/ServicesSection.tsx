'use client';

import { useState } from 'react';
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
    description: 'СТО "АЗР Південний" виконує заміну комплектів ременів ГРМ.',
    price: 'від 4000 грн',
    idCard: 'timing-belt-replacement',
    modal: {
      image: './images/timing-belt-replacement.jpg',
      bigDescription: 'Заміна ременя ГРМ - це необхідна процедура...',
    },
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [expanded, setExpanded] = useState(false);

  const VISIBLE_COUNT = 8;

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
          {services.slice(0, VISIBLE_COUNT).map((service) => (
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
            {services.slice(VISIBLE_COUNT).map((service) => (
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
