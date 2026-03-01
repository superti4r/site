/**
 * Load fonts from addons/fonts
 * @fonts @loaders
 */

import localFont from "next/font/local";
import { Bebas_Neue } from "next/font/google";

const Satoshi = localFont({
  src: "./fonts/satoshi.ttf",
  display: "swap",
});

const BebasNeue = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export { Satoshi, BebasNeue };
