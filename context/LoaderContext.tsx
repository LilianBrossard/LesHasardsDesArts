"use client";
import { createContext, useState, ReactNode } from "react";
interface LoaderContextProps {
  loader: boolean;
  setLoader: (value: boolean) => void;
}

export const LoaderContext = createContext<LoaderContextProps | undefined>(
  undefined
);

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [loader, setLoader] = useState<boolean>(false);

  return (
    <LoaderContext.Provider value={{ loader, setLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};
