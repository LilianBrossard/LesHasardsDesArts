"use client";
import TenArtworks from "@/components/TenArtworks";
import { useRef, useContext, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { InteractionContext } from "@/context/InteractionContext";

export default function InfiniteScroll() {
  const interactionContext = useContext(InteractionContext);
  const RefArtworkList = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const addArtwork = () => {
    if (isLoading) return;

    setIsLoading(true);
    const newArtwork = document.createElement("div");
    RefArtworkList.current?.appendChild(newArtwork);
    const root = createRoot(newArtwork);
    root.render(<TenArtworks />);

    // Simuler le temps de chargement/rendu des artworks
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoading) {
            addArtwork();
          }
        });
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, [isLoading]);
  return (
    <div className="w-full relative overflow-hidden px-4 lg:px-16">
      <div ref={RefArtworkList} className="w-full flex flex-col">
        <div>
          <TenArtworks />
        </div>
      </div>

      {/* Indicateur de chargement visible */}
      {isLoading && (
        <div className="w-full flex flex-col items-center justify-center py-12 gap-4">
          <div className="relative w-16 h-16">
            {/* Cercle animé qui tourne */}
            <div className="absolute inset-0 border-4 border-orange-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-orange-500 rounded-full border-t-transparent animate-spin"></div>
          </div>
          <p className="text-orange-500 text-lg font-medium animate-pulse">
            Chargement des œuvres...
          </p>
        </div>
      )}

      {/* Détecteur invisible pour le chargement automatique */}
      <div ref={triggerRef} className="w-full h-20" aria-hidden="true" />
    </div>
  );
}
