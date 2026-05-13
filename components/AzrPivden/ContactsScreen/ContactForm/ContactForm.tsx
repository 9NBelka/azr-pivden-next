'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ContactForm.module.scss';

const services = [
  'Діагностика двигуна',
  'Комп`ютерна діагностика',
  'Діагностика перед покупкою',
  'Діагностика підвіски',
  'Планове технічне обслуговування',
  'Заміна ременя ГРМ',
  'Заміна ланцюга ГРМ',
  'Регулювання розвалу-сходження',
  'Заміна амортизаторів',
  'Ремонт електрики',
  'Ремонт двигуна',
  'Ремонт гальмівної системи',
  'Ремонт ходової',
  'Ремонт системи кондиціонування',
  'Заміна масла',
  'Інша послуга',
];

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    vin: '',
    service: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (fieldName: string, value: string) => {
    let error = '';
    if (fieldName === 'name') {
      if (!value.trim()) error = "Ім'я обов'язкове";
      else if (value.trim().length > 20) error = "Ім'я не може бути довшим за 20 символів";
    }
    if (fieldName === 'phone') {
      if (!value.trim()) error = 'Телефон обов`язковий';
      else {
        const digits = value.replace(/\D/g, '');
        if (digits.length < 9) error = 'Номер повинен містити мінімум 9 цифр';
        else if (digits.length > 12) error = 'Номер не може містити більше 12 цифр';
      }
    }
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, phone: true });
    const nameErr = validateField('name', formData.name);
    const phoneErr = validateField('phone', formData.phone);
    if (nameErr || phoneErr) return;

    setIsSubmitting(true);
    const message = `Нова заявка з форми! 🚀\n\n👤 Ім'я: ${formData.name.trim() || '—'}\n📞 Телефон: ${formData.phone.trim() || '—'}\n🚗 Марка/модель: ${formData.carModel.trim() || '—'}\n🔑 VIN номер: ${formData.vin.trim() || '—'}\n🔧 Послуга: ${formData.service || '—'}`;

    try {
      const BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
      const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      });
      const data = await res.json();
      if (data.ok) {
        router.push('/thanks');
        setFormData({ name: '', phone: '', carModel: '', vin: '', service: '' });
      } else {
        alert('Помилка відправки. Спробуйте пізніше.');
      }
    } catch {
      alert("Помилка з'єднання. Перевірте інтернет.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name.trim() !== '' && formData.phone.trim() !== '';

  return (
    <div className={styles.titleAndContactForm}>
      <h3 className={styles.title}>Записатися на сервіс</h3>
      <h4 className={styles.description}>
        Заповніть форму і ми зв`яжемося з вами для підтвердження
      </h4>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Ваше Ім'я *"
              className={errors.name && touched.name ? styles.errorInput : ''}
            />
          </div>
          <div className={styles.field}>
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Телефон *'
              className={errors.phone && touched.phone ? styles.errorInput : ''}
            />
          </div>
          <div className={styles.field}>
            <input
              type='text'
              name='carModel'
              value={formData.carModel}
              onChange={handleChange}
              placeholder='Марка/модель автомобіля'
            />
          </div>
          <div className={styles.field}>
            <input
              type='text'
              name='vin'
              value={formData.vin}
              onChange={handleChange}
              placeholder='VIN номер'
            />
          </div>
          <div className={styles.field}>
            <select
              name='service'
              value={formData.service}
              onChange={handleChange}
              className={`${styles.select} ${!formData.service ? styles.selectPlaceholder : ''}`}>
              <option value='' disabled>
                Послуга
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <button
            type='submit'
            className={styles.submitBtn}
            disabled={isSubmitting || !isFormValid}>
            <img src='/sendIcon.svg' alt='' className={styles.planeIcon} />
            {isSubmitting ? 'Відправляється...' : 'Відправити заявку'}
          </button>
        </form>
      </div>
    </div>
  );
}
