"use client";
import Link from "next/link";
import LinkStyle from "@/components/LinkStyle";

export default function Nav() {
  const LinkTop = "/#";
  const LinkContact = "/#";
  const LinkScroll = "/#";

  return (
    <div className="w-full">
      <div className="absolute top-0"></div>
      <h2 className="sr-only">The serendipitys of arts</h2>
      <div className="w-full overflow-visible flex flex-col md:flex-row items-center justify-around">
        <div className="w-full flex flex-row items-center relative top-0 z-50 all-transition duration-300 ease-in-out p-4">
          <Link
            href={LinkTop}
            className="font-[family-name:var(--font-rouge)] text-slate-950 text-3xl lg:text-5xl relative xl:-top-10 all-transition duration-300 ease-in-out"
          >
            The Serendipitys
          </Link>
          <Link
            href={LinkTop}
            className="font-[family-name:var(--font-rouge)] top-8 right-20 text-slate-950 pl-[3vw] text-3xl lg:text-5xl relative xl:-top-10 all-transition duration-300 ease-in-out"
          >
            of Arts
          </Link>
        </div>
        <div className="w-full justify-center flex flex-row items-center all-transition duration-300 ease-in-out p-4 gap-8">
          <LinkStyle lien={LinkTop} info="Home" />
          <LinkStyle lien={LinkScroll} info="Discover" />
          <LinkStyle lien={LinkContact} info="Contact" />
        </div>
      </div>
    </div>
  );
}
