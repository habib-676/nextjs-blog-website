import Navbar from "@/components/web/Navbar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <Navbar />
        {children}
      </header>
    </div>
  );
}
