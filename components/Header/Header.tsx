'use client';

import { useState } from 'react';
import styles from './Header.module.scss';
import { BsX } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import DiscountBlockSToTwo from '../AzrPivden/DiscountBlockSToTwo/DiscountBlockSToTwo';

interface NavLink {
  title: string;
  linkToPage: string;
}

export default function Header({ navLinks }: { navLinks: NavLink[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <div className={styles.logoContainer}>
            <a onClick={() => scrollToSection('hero')} style={{ cursor: 'pointer' }}>
              <img src='/images/AZRImgLogo.png' alt='AZR logo' />
            </a>
          </div>

          <nav className={styles.desktopNav}>
            {navLinks.map((info, index) => (
              <button
                key={index}
                type='button'
                onClick={() => scrollToSection(info.linkToPage)}
                className={styles.navLink}>
                {info.title}
              </button>
            ))}
          </nav>

          <div className={styles.contactContainer}>
            <div className={styles.twoPhonesBlock}>
              <a className={styles.linkToPhone} href='tel:+380676428206' id='headerPhone'>
                <FiPhoneCall className={styles.iconPhone} /> +380 (67) 642-82-06
              </a>
            </div>
            <button
              onClick={() => scrollToSection('contacts')}
              className={styles.ctaButton}
              id='buttonSendToContact'>
              Записатися
            </button>
          </div>

          <button
            type='button'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.mobileMenuButton}
            aria-label='Меню'>
            {isMenuOpen ? (
              <BsX className={styles.icon} />
            ) : (
              <AiOutlineMenu className={styles.icon} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className={styles.mobileNav}>
            <nav className={styles.mobileNavList}>
              {['hero', 'services', 'whyus', 'feedbacks', 'contacts'].map((id, i) => {
                const labels: Record<string, string> = {
                  hero: 'Головна',
                  services: 'Послуги',
                  whyus: 'Чому ми',
                  feedbacks: 'Відгуки',
                  contacts: 'Запис',
                };
                return (
                  <button
                    key={i}
                    type='button'
                    onClick={() => scrollToSection(id)}
                    className={styles.mobileNavLink}>
                    {labels[id]}
                  </button>
                );
              })}
              <div className={styles.mobileCtaContainer}>
                <button
                  onClick={() => scrollToSection('contacts')}
                  className={styles.mobileCtaButton}>
                  Записатися
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
      <div onClick={() => scrollToSection('contacts')}>
        <DiscountBlockSToTwo />
      </div>
    </header>
  );
}
