import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { headerData } from "@/content/Header";
import { heroData } from "@/content/Hero";
import { mainData } from "@/content/Main";
import { socialData, footerData } from "@/content/Footer";

export default function Home() {
  return (
    <div>
      <Header data={headerData} />
      <main>
        <Hero data={heroData} />
        <Main data={mainData} />
      </main>
      <Footer data={footerData} social={socialData} />
    </div>
  );
}
