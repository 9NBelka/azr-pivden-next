import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.scss';

export const metadata: Metadata = {
  title: 'СТО «АЗР ПІВДЕННИЙ» — Ремонт японських та VAG автомобілів у Харкові',
  description:
    'Автосервіс АЗР Південний у Харкові. Ремонт японських та VAG авто: заміна ГРМ, ходова, діагностика, ТО, розвал-сходження. Понад 20 років досвіду.',
  keywords: [
    'СТО Харків',
    'ремонт авто Харків',
    'АЗР Південний',
    'заміна ГРМ',
    'діагностика авто',
    'японські авто',
    'VAG ремонт',
  ],
  authors: [{ name: 'AZR' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'СТО «АЗР ПІВДЕННИЙ»',
    description: 'Автосервіс АЗР Південний у Харкові. Ремонт японських та VAG авто.',
    type: 'website',
    url: 'https://a.merc.kharkov.ua',
    images: [{ url: '/imageMeta.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'СТО «АЗР ПІВДЕННИЙ»',
    description: 'Автосервіс АЗР Південний у Харкові. Ремонт японських та VAG авто.',
    images: ['/imageMeta.png'],
  },
  icons: {
    icon: [{ url: '/faviconLogo.png' }],
    apple: [{ url: '/faviconLogo.png', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='uk' suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* Google Tag Manager */}
        <Script id='gtm-script' strategy='afterInteractive'>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W5R878ZS');`}
        </Script>

        {/* GTM noscript */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-W5R878ZS'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Google Analytics */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-4TYJV1XGPB'
          strategy='afterInteractive'
        />
        <Script id='gtag-init' strategy='afterInteractive'>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4TYJV1XGPB');`}
        </Script>

        {children}

        {/* Binotel call tracking */}
        <Script id='binotel-tracking' strategy='afterInteractive'>
          {`(function(d,w,s){var widgetHash='9b30iv4ftgdyaj08w5yo',ctw=d.createElement(s);
          ctw.type='text/javascript';ctw.async=true;
          ctw.src='//widgets.binotel.com/calltracking/widgets/'+widgetHash+'.js';
          var sn=d.getElementsByTagName(s)[0];sn.parentNode.insertBefore(ctw,sn);
          })(document,window,'script');`}
        </Script>

        {/* Binotel getcall */}
        <Script id='binotel-getcall' strategy='afterInteractive'>
          {`(function(d,w,s){var widgetHash='dyy0jrf7gg663dh4hqyb',gcw=d.createElement(s);
          gcw.type='text/javascript';gcw.async=true;
          gcw.src='//widgets.binotel.com/getcall/widgets/'+widgetHash+'.js';
          var sn=d.getElementsByTagName(s)[0];sn.parentNode.insertBefore(gcw,sn);
          })(document,window,'script');`}
        </Script>
      </body>
    </html>
  );
}
