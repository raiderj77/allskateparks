import type { Metadata } from "next";
export const metadata: Metadata = { title: "allskateparks", description: "Coming soon." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
