import Header from '@/components/Header/Header';
import HeroSection from '@/components/AzrPivden/HeroSection/HeroSection';
import AfterHeroScreen from '@/components/AzrPivden/AfterHeroScreen/AfterHeroScreen';
import ServicesSection from '@/components/AzrPivden/ServicesSection/ServicesSection';
import DiagnosticsSection from '@/components/AzrPivden/DiagnosticsSection/DiagnosticsSection';
import WhyChooseUs from '@/components/AzrPivden/WhyChooseUs/WhyChooseUs';
import FeedBacks from '@/components/AzrPivden/FeedBacks/FeedBacks';
import StatsSection from '@/components/AzrPivden/StatsSection/StatsSection';
import ContactsScreen from '@/components/AzrPivden/ContactsScreen/ContactsScreen';
import Footer from '@/components/Footer/Footer';

const navLinks = [
  { title: 'Послуги', linkToPage: 'services' },
  { title: 'Діагностика', linkToPage: 'diagnostics' },
  { title: 'Чому ми', linkToPage: 'whyus' },
  { title: 'Відгуки', linkToPage: 'feedbacks' },
  { title: 'Запис', linkToPage: 'contacts' },
];

export default function HomePage() {
  return (
    <div>
      <Header navLinks={navLinks} />
      <main>
        <HeroSection />
        <AfterHeroScreen />
        <ServicesSection />
        <DiagnosticsSection />
        <WhyChooseUs />
        <FeedBacks />
        <StatsSection />
        <ContactsScreen />
      </main>
      <Footer navLinks={navLinks} />
    </div>
  );
}
