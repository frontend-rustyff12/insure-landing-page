import React from "react";

type FooterLink = {
  name: string;
  link: string;
};

type FooterLinkItemProps = {
  title: string;
  items: FooterLink[];
};

export default function FooterLinkItem({ title, items }: FooterLinkItemProps) {
  return (
    <div className="link-container">
      <h5>{title}</h5>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
