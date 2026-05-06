import type { ReactNode } from "react";
import { Header } from "@/components/nav/Header";
import { Footer } from "@/components/nav/Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
