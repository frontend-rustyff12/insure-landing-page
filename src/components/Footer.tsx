import Image from "next/image";
import FooterLinkItem from "./FooterLinkItem";
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
          <FooterLinkItem title={data[0].title} items={data[0].dataEntry} />
          <FooterLinkItem title={data[1].title} items={data[1].dataEntry} />
          <FooterLinkItem title={data[2].title} items={data[2].dataEntry} />
          <FooterLinkItem title={data[3].title} items={data[3].dataEntry} />
        </div>
      </div>
    </footer>
  );
}
