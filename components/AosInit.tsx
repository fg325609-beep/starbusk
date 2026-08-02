"use client";

import { useEffect } from "react";
import AOS from "aos";

/**
 * Mounted once in the root layout. AOS reads `data-aos` attributes from
 * the DOM, so it needs to run after hydration on the client only.
 */
export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  return null;
}
