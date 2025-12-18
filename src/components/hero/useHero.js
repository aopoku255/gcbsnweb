import { useState } from "react";

export function useHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return { mobileMenuOpen, setMobileMenuOpen };
}
