import Card from "./Card";
import Cta from "./Cta";
import "./styles/Main.css";

type MainItem = {
  title: string;
  text: string;
  image: string;
};

type MainProps = {
  data: MainItem[];
};
export default function Main({ data }: MainProps) {
  return (
    <div className="main-content">
      <div className="main-wrapper">
        <h2>We're different</h2>
        <section className="card-container">
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              text={item.text}
              image={item.image}
            />
          ))}
        </section>
      </div>
      <Cta />
    </div>
  );
}
