'use client';

import { useRouter } from 'next/navigation';
import scss from './thanks.module.scss';
import { BsArrowLeftShort } from 'react-icons/bs';

export default function ThanksPage() {
  const router = useRouter();
  return (
    <div className={scss.backgroundBlock}>
      <div className={scss.container}>
        <div className={scss.thanksPageBlock}>
          <img src='/images/imageForThanksPageDownload.png' alt='imageForThanksPageDownload' />
          <h2>
            <span className={scss.titleBig}>🎉 Дякуємо!</span>
          </h2>
        </div>
      </div>
      <button onClick={() => router.back()} className={scss.backButton}>
        <BsArrowLeftShort className={scss.iconBack} />
        Повернутись
      </button>
    </div>
  );
}
