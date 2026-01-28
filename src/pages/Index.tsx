import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ValueProposition } from "@/components/home/ValueProposition";
import { ChallengesSection } from "@/components/home/ChallengesSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ProcessPreview } from "@/components/home/ProcessPreview";
import { SectorsPreview } from "@/components/home/SectorsPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ValueProposition />
      <ChallengesSection />
      <ServicesPreview />
      <ProcessPreview />
      <SectorsPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
