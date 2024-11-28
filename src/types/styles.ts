import { ReactNode } from "react";

export type Style = {
  id: string;
  name: string;
  description: string;
  phrases: string[];
  color: string;
  icon: ReactNode;
};