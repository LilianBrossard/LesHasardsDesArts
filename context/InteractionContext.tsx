"use client";
import { createContext, useState, ReactNode } from "react";
interface InteractionContextProps {
  interaction: boolean;
  setInteraction: (value: boolean) => void;
}

export const InteractionContext = createContext<
  InteractionContextProps | undefined
>(undefined);

export const InteractionProvider = ({ children }: { children: ReactNode }) => {
  const [interaction, setInteraction] = useState<boolean>(false);

  return (
    <InteractionContext.Provider value={{ interaction, setInteraction }}>
      {children}
    </InteractionContext.Provider>
  );
};
