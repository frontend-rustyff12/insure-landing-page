import Hero from "@/components/Hero";
import Main from "@/components/Main";
import { heroData } from "@/content/Hero";
import { mainData } from "@/content/Main";

export default function Home() {
  return (
    <main>
      <Hero data={heroData} />
      <Main data={mainData} />
    </main>
  );
}
