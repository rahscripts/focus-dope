import { Inter } from "next/font/google";
import { Instrument_Serif } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const iserif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"], // ONLY weight available
});