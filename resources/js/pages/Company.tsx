import { Head } from "@inertiajs/react";
import PageLayout from "@/components/PageLayout";
import TwoColumnSection from "@/components/sections/TwoColumnSection";
import CompanyDescription from "@/components/CompanyDescription";
import Timeline from "@/components/Timeline";

interface CompanyInfo {
  title: string;
  description: string[];
  image: string;
}

interface HistoryItem {
  year: string;
  month: string;
  description: string;
}

interface CompanyProps {
  company: CompanyInfo;
  history: HistoryItem[];
}

export default function Company({ company, history }: CompanyProps) {
  return (
    <PageLayout>
      <Head title="Company - Agency Inc." />

      {/* Company Section */}
      <TwoColumnSection title="Company">
        <CompanyDescription
          title={company.title}
          image={company.image}
          description={company.description}
        />
      </TwoColumnSection>

      {/* History Section */}
      <TwoColumnSection title="History">
        <Timeline items={history} />
      </TwoColumnSection>
    </PageLayout>
  );
}