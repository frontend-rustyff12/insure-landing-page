"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "@/components/styles/header.css";

type HeaderItem = {
  id: number;
  name: string;
};

type HeaderProps = {
  data: HeaderItem[];
};

const DESKTOP_BREAKPOINT = 1024;

export default function Header({ data }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= DESKTOP_BREAKPOINT;
      setIsDesktop(desktop);

      if (desktop) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className="header-wrapper">
        <Image src="/logo.svg" height={18} width={112} alt="Logo" />

        {/* Desktop Nav */}
        {isDesktop && (
          <nav className="desktop-nav">
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  <a
                    className={`${item.id === 4 ? "btn" : ""} nav-link`}
                    href=""
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Mobile Nav */}
        {!isDesktop && (
          <nav className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
            <Image
              src={
                isMenuOpen
                  ? "/icons/icon-close.svg"
                  : "/icons/icon-hamburger.svg"
              }
              height={32}
              width={32}
              alt="Menu toggle"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />

            {isMenuOpen && (
              <ul className="nav-items open">
                {data.map((item) => (
                  <li key={item.id}>
                    <a
                      className={`${item.id === 4 ? "btn" : ""} nav-link`}
                      href=""
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
