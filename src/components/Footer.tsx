import Image from "next/image";
import "./styles/Footer.css";

type SocialItem = {
  name: string;
  link: string;
  image: string;
  alt: string;
};

type FooterDataItem = {
  title: string;
  dataEntry: DataEntry[];
};

type DataEntry = {
  name: string;
  link: string;
};

type FooterProps = {
  data: FooterDataItem[];
  social: SocialItem[];
};

export default function Footer({ data, social }: FooterProps) {
  const first = data[0].dataEntry.map((item, index) => (
    <div key={index}>{item.name}</div>
  ));
  console.log(data[0].dataEntry);
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-top">
          <Image src="/logo.svg" height={18} width={112} alt="" />
          <div className="socials-container">
            {social.map((item, index) => (
              <a key={index} href={item.link}>
                <Image src={item.image} width={24} height={24} alt={item.alt} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <div className="link-container">{first}</div>
        </div>
      </div>
    </footer>
  );
}
