import { createContext } from "react";
export type ThemeContextProp = "light" | "dark";
export const ThemeContext = createContext<ThemeContextProp>("light");
