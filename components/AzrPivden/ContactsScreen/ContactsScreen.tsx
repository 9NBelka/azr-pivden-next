import styles from './ContactsScreen.module.scss';
import { BsEnvelope, BsTelephoneForward } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';
import { LuMapPin } from 'react-icons/lu';
import { FaRegClock } from 'react-icons/fa';
import ContactForm from './ContactForm/ContactForm';

export default function ContactsScreen() {
  return (
    <section className={styles.contactsMain} id='contacts'>
      <h3 className={styles.textBackground}>CONTACT</h3>
      <div className={styles.container}>
        <div className={styles.contactsAndFormBlock}>
          <div className={styles.textContent}>
            <div className={styles.map}>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d539.3123850258023!2d36.205758802125274!3d49.984800295042724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a123783a6f4b%3A0xac80806aed8fe16a!2z0KHQotCeINCQ0JfQoCDQn9GW0LLQtNC10L3QvdC90LjQuQ!5e0!3m2!1sru!2sua!4v1768950221573!5m2!1sru!2sua'
                allowFullScreen
                loading='lazy'
              />
            </div>
            <div className={styles.contactInfo}>
              <a
                href='https://maps.app.goo.gl/BMRQP6RtMWa9NGycA'
                className={styles.contactLink}
                target='_blank'>
                <div className={styles.contactItem}>
                  <div className={styles.iconAndContacts}>
                    <div className={styles.contactIconBlock}>
                      <LuMapPin className={styles.contactIcon} />
                    </div>
                    <div>
                      <p className={styles.contactItemTitleMini}>Адреса</p>
                      <p className={styles.contactItemTextMini}>
                        м. Харків, вул. Гвардійців-залізничників 15
                      </p>
                    </div>
                  </div>
                  <div className={styles.iconRightLinkBlock}>
                    <FiArrowUpRight className={styles.iconRightLink} />
                  </div>
                </div>
              </a>
              <a href='tel:+380676428206' target='_blank' className={styles.contactLink}>
                <div className={styles.contactItem}>
                  <div className={styles.iconAndContacts}>
                    <div className={styles.contactIconBlock}>
                      <BsTelephoneForward className={styles.contactIcon} />
                    </div>
                    <div>
                      <p className={styles.contactItemTitleMini}>Телефони</p>
                      <p className={styles.contactItemTextMini}>+380 (67) 642-82-06</p>
                    </div>
                  </div>
                  <div className={styles.iconRightLinkBlock}>
                    <FiArrowUpRight className={styles.iconRightLink} />
                  </div>
                </div>
              </a>
              <div className={styles.contactItem}>
                <div className={styles.iconAndContacts}>
                  <div className={styles.contactIconBlock}>
                    <FaRegClock className={styles.contactIcon} />
                  </div>
                  <div>
                    <p className={styles.contactItemTitleMini}>Графік роботи</p>
                    <p className={styles.contactItemTextMini}>
                      Понеділок - П`ятниця: 09:00 - 18:00
                    </p>
                    <p className={styles.contactItemTextMini}>Субота: 09:00 - 14:00</p>
                    <p className={styles.contactItemTextMini}>Неділя: вихідний</p>
                  </div>
                </div>
                <div className={styles.iconRightLinkBlock}>
                  <FiArrowUpRight className={styles.iconRightLink} />
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
