import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import VisionMission from './components/VisionMission';
import About from './components/About';
import RecentWork from './components/RecentWork';
import Services from './components/Services';
import OurTeam from './components/OurTeam';
import OurPartners from './components/OurPartners';
import HttpClient from '@/lib/fetch';
import { TOurPartners } from '@/types/ourPartners';
import { TOurWorkItem } from '@/types/ourWork';
import { TOurTeam } from '@/types/ourTeam';

export default async function Home() {
  const http = new HttpClient();
  const ourPartnersData = await http.get<TOurPartners[]>("/api/Partners") 
  const ourRecentWorksData = await http.get<TOurWorkItem[]>("/api/RecentWorks") 
  const ourTeamData = await http.get<TOurTeam[]>("/api/Team") 
  const ourServiceImagesData = await http.get<string[]>("/api/ServiceImages/urls") 
  return (
    <Layout>
      <HeroSection />
      <About />
      <OurPartners data={ourPartnersData.data}/>
      <VisionMission />
      <Services images={ourServiceImagesData.data}/>
      <OurTeam data={ourTeamData.data}/>
      <RecentWork data={ourRecentWorksData.data}/>
    </Layout>
  );
}

