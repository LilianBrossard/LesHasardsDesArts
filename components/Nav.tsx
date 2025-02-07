"use client";
import { useRef } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import LinkStyle from "@/components/LinkStyle";

export default function Nav() {
  const LinkTop = "/#";
  const LinkContact = "/#";
  const LinkScroll = "/#";

  const RefMainTitle = useRef<HTMLDivElement>(null);
  const RefNav = useRef<HTMLDivElement>(null);
  const RefLinks = useRef<HTMLDivElement>(null);
  const RefObserver = useRef<HTMLDivElement>(null);
  const Ref2MainTitle = useRef<HTMLAnchorElement>(null);
  const top = true;

  const [isTop, setIsTop] = useState(top);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTop(entry.isIntersecting);
      },
      { threshold: [0] }
    );

    if (RefObserver.current) {
      observer.observe(RefObserver.current);
    }

    return () => {
      if (RefObserver.current) {
        observer.unobserve(RefObserver.current);
      }
    };
  }, [RefObserver]);

  useEffect(() => {
    if (isTop) {
      RefMainTitle.current?.classList.add("justify-center");
      Ref2MainTitle.current?.classList.remove("absolute");
      Ref2MainTitle.current?.classList.remove("top-8");
      Ref2MainTitle.current?.classList.remove("right-20");
      RefNav.current?.classList.remove("md:flex-row");
      RefLinks.current?.classList.add("justify-end");
      RefLinks.current?.classList.remove("justify-center");
      RefMainTitle.current?.childNodes.forEach((child) => {
        if (child instanceof HTMLElement) {
          child.classList.add("text-[11vw]");
          child.classList.add("xl:-top-10");
          child.classList.remove("text-3xl");
          child.classList.remove("lg:text-5xl");
        }
      });
    } else {
      RefMainTitle.current?.classList.remove("justify-center");
      Ref2MainTitle.current?.classList.add("absolute");
      Ref2MainTitle.current?.classList.add("top-8");
      Ref2MainTitle.current?.classList.add("right-20");
      RefNav.current?.classList.add("md:flex-row");
      RefLinks.current?.classList.remove("justify-end");
      RefLinks.current?.classList.add("justify-center");
      RefMainTitle.current?.childNodes.forEach((child) => {
        if (child instanceof HTMLElement) {
          child.classList.remove("text-[11vw]");
          child.classList.remove("xl:-top-10");
          child.classList.add("text-3xl");
          child.classList.add("lg:text-5xl");
        }
      });
    }
  }, [isTop]);

  return (
    <div className="w-full">
      <div className="absolute top-0" ref={RefObserver}></div>
      <h2 className="sr-only">The serendipitys of arts</h2>
      <div
        className="w-full overflow-visible flex flex-col items-center justify-around fixed"
        ref={RefNav}
      >
        <div
          className="w-full flex flex-row items-center justify-center relative top-0 z-50 all-transition duration-300 ease-in-out p-4"
          ref={RefMainTitle}
        >
          <Link
            href={LinkTop}
            className="font-[family-name:var(--font-rouge)] text-slate-950 text-[11vw] relative xl:-top-10 all-transition duration-300 ease-in-out"
          >
            The Serendipitys
          </Link>
          <Link
            href={LinkTop}
            className="font-[family-name:var(--font-rouge)] text-slate-950 pl-[3vw] text-[11vw] relative xl:-top-10 all-transition duration-300 ease-in-out"
            ref={Ref2MainTitle}
          >
            of Arts
          </Link>
        </div>
        <div
          className="w-full flex flex-row items-center all-transition duration-300 ease-in-out p-4 gap-8"
          ref={RefLinks}
        >
          <LinkStyle lien={LinkTop} info="Home" />
          <LinkStyle lien={LinkScroll} info="Discover" />
          <LinkStyle lien={LinkContact} info="Contact" />
        </div>
      </div>
    </div>
  );
}
