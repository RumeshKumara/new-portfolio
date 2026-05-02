"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  
  // Hide navbar on the design-work page
  if (pathname === "/design-work") {
    return null;
  }

  return <Navbar />;
}
