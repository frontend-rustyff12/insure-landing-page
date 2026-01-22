import Header from "@/components/Header";
import { headerData } from "@/content/Header";
export default function Home() {
  return (
    <div>
      <main>
        <Header data={headerData} />
      </main>
    </div>
  );
}
