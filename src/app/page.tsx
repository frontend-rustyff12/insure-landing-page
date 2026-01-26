import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import { headerData } from "@/content/Header";
import { heroData } from "@/content/Hero";
import { mainData } from "@/content/Main";

export default function Home() {
  return (
    <div>
      <Header data={headerData} />
      <main>
        <Hero {...heroData} />
        <Main data={mainData} />
      </main>
    </div>
  );
}
