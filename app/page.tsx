import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import VisionMission from './components/VisionMission';
import About from './components/About';
import RecentWork from './components/RecentWork';
import Services from './components/Services';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <VisionMission />
      <Services/>
      <About />
      <RecentWork />
    </Layout>
  );
}

