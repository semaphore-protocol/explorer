import './globals.css'
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Semaphorus: A Sempahore Explorer",
  description:
    "This Semaphore explorer is a blockchain data visualization tool that enables users to view and explore on-chain data from multiple networks in a user-friendly way. Powered by the Semaphore subgraph and the @semaphore-protocol/data library, this read-only web application provides a comprehensive and intuitive interface for analyzing blockchain data, making it an invaluable resource for developers in the cryptocurrency ecosystem.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.className} dark`}>
      <body>{children}</body>
    </html>
  );
}
