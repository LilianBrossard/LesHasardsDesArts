"use client";
import Link from "next/link";
interface LinkStyleProps {
  lien?: string;
  info?: string;
}

export default function LinkStyle({
  lien = "/#",
  info = "not definded",
}: LinkStyleProps) {
  return (
    <div className="font-[family-name:var(--font-bruno)] border-t-4 border-t-slate-950 border-b-4 border-b-slate-950 text-slate-950 text-2xl text-center">
      <Link href={lien}>
        <div className="flex flex-col items-center justify-center">
          <p>{info}</p>
          <p>{info}</p>
        </div>
      </Link>
    </div>
  );
}
