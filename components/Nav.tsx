"use client";
import Link from "next/link";
import LinkStyle from "@/components/LinkStyle";
import { InteractionContext } from "@/context/InteractionContext";
import { useContext } from "react";

export default function Nav() {
  const LinkTop = "/#";
  const LinkContact = "/#";
  const LinkScroll = "/#";

  const interactionContext = useContext(InteractionContext);

  const handleMouseEnter = () => {
    if (interactionContext) {
      interactionContext.setInteraction(true);
    }
  };

  const handleMouseLeave = () => {
    if (interactionContext) {
      interactionContext.setInteraction(false);
    }
  };

  return (
    <div className="w-full sticky top-0 left-0 z-10">
      <div
        className="absolute inset-0 h-full w-full pointer-events-auto"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.5) 70%, rgba(255,255,255,0.0) 100%)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 1,
        }}
      />
      <div className="absolute top-0"></div>
      <h2 className="sr-only">The serendipitys of arts</h2>
      <div className="w-full overflow-visible flex flex-col md:flex-row items-center justify-around relative z-10">
        <div className="w-full hidden md:flex justify-center flex-row items-center relative top-0 z-50 all-transition duration-300 ease-in-out p-4">
          <Link
            href={LinkTop}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="cursor-none font-[family-name:var(--font-rouge)] text-slate-950 text-3xl lg:text-5xl -top-2 relative all-transition duration-300 ease-in-out"
          >
            The Serendipitys
          </Link>
          <Link
            href={LinkTop}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="cursor-none font-[family-name:var(--font-rouge)] text-slate-950 text-3xl lg:text-5xl relative left-[-2vw] top-4 lg:left-[-1vw] all-transition duration-300 ease-in-out"
            style={{ minWidth: "max-content" }}
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
