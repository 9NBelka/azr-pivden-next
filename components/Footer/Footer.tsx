'use client';

import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

interface NavLink {
  title: string;
  linkToPage: string;
}

export default function Footer({ navLinks }: { navLinks: NavLink[] }) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.mainBlock}>
            <div className={styles.logo}>
              <img src='/images/AZRImgLogo.png' alt='logo-footer' />
            </div>
            <p className={styles.companyDescription}>
              Ваш надійний автосервіс у Харкові. Даємо гарантію на весь регламентний термін!
            </p>
            <div className={styles.socialLinks}>
              <a
                href='https://www.facebook.com/azr.yug/'
                className={styles.socialLink}
                target='_blank'>
                <BsFacebook className={styles.tiktokIcon} />
              </a>
              <a
                href='https://www.instagram.com/azr.yug/'
                className={styles.socialLink}
                target='_blank'>
                <BsInstagram className={styles.tiktokIcon} />
              </a>
            </div>
          </div>

          <div className={styles.services}>
            <h3 className={styles.sectionTitle}>Навігація</h3>
            <ul className={styles.serviceList}>
              {navLinks.map((info, index) => (
                <li key={index}>
                  <a
                    className={styles.serviceLink}
                    onClick={() => scrollToSection(info.linkToPage)}
                    style={{ cursor: 'pointer' }}>
                    {info.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.services}>
            <h3 className={styles.sectionTitle}>Контакти</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>м. Харків, вул. Гвардійців-залізничників 15</span>
              </div>
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <a href='tel:+380676428206' className={styles.contactLink}>
                  +380 (67) 642-82-06
                </a>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <a href='mailto:azr.15ug@gmail.com' className={styles.contactLink}>
                  azr.15ug@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className={styles.services}>
            <h3 className={styles.sectionTitle}>Графік роботи</h3>
            <div className={styles.workingHours}>
              <div className={styles.contactItem}>
                <FaClock className={styles.contactIcon} />
                <div className={styles.contactItemTime}>
                  <p>Пн-Пт: 09:00 - 18:00</p>
                  <p>Сб: 09:00 - 14:00</p>
                  <p>Нд: вихідний</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} СТО `АЗР Південний` Харків. Всі права захищені.
          </p>
          <div className={styles.bottomLinks}>
            <Link href='/privacy-policy' className={styles.bottomLink}>
              Політика конфіденційності
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
