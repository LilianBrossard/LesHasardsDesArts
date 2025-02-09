"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TestPage() {
  const [id, setId] = useState<number | string>("N/A");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryId = new URLSearchParams(window.location.search).get("id");
      setId(queryId ? parseInt(queryId, 10) : "N/A");
    }
  }, []);

  return (
    <div>
      <h1>Test Page</h1>
      <Link href="/">Retour à l'accueil</Link>
      <p>ID: {id}</p>
    </div>
  );
}
