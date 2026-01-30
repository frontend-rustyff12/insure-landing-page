import Image from "next/image";

import "./styles/Hero.css";

type HeroItem = {
  heading: string;
  text: string;
};

type HeroProps = {
  data: HeroItem;
};

export default function Hero({ data }: HeroProps) {
  const { heading, text } = data;
  return (
    <section className="hero">
      <div className="hero-wrapper">
        {/* Mobile / Tablet image */}
        <div className="hero-img hero-img--mobile">
          <Image
            src="/image-intro-mobile.jpg"
            alt="Intro image"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Desktop image */}
        <div className="hero-img hero-img--desktop">
          <Image
            src="/image-intro-desktop.jpg"
            alt="Intro image"
            fill
            priority
            sizes="540px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="hero-content">
          <h1>{heading}</h1>
          <p>{text}</p>
          <button className="hero-btn">view plans</button>
        </div>
      </div>
    </section>
  );
}
