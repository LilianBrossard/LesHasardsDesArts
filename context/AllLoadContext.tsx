"use client";
import { createContext, useState, ReactNode } from "react";
interface AllLoadContextProps {
  allLoad: boolean;
  setAllLoad: (value: boolean) => void;
}

export const AllLoadContext = createContext<AllLoadContextProps | undefined>(
  undefined
);

export const AllLoadProvider = ({ children }: { children: ReactNode }) => {
  const [allLoad, setAllLoad] = useState<boolean>(false);

  return (
    <AllLoadContext.Provider value={{ allLoad, setAllLoad }}>
      {children}
    </AllLoadContext.Provider>
  );
};
