"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Show on every page load / refresh
    document.body.classList.add("loader-active");

    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 2600);

    const hideTimer = setTimeout(() => {
      setVisible(false);
      document.body.classList.remove("loader-active");
    }, 3400);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
      document.body.classList.remove("loader-active");
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loader-overlay${exiting ? " loader-exit" : ""}`}>
      {/* Animated grid background */}
      <div className="loader-grid" aria-hidden="true" />

      {/* Floating orbs */}
      <div className="loader-orb loader-orb-1" aria-hidden="true" />
      <div className="loader-orb loader-orb-2" aria-hidden="true" />
      <div className="loader-orb loader-orb-3" aria-hidden="true" />

      {/* Center content */}
      <div className={`loader-content${exiting ? " loader-content-exit" : ""}`}>
        {/* Profile image with ring animations */}
        <div className="loader-avatar-wrap">
          <span className="loader-ring loader-ring-1" aria-hidden="true" />
          <span className="loader-ring loader-ring-2" aria-hidden="true" />
          <span className="loader-ring loader-ring-3" aria-hidden="true" />
          <div className="loader-avatar">
            <Image
              src="/black-profile.png"
              alt="Rumesh Kumara"
              fill
              sizes="120px"
              className="loader-avatar-img"
              priority
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="loader-name">Rumesh Kumara</h1>

        {/* Tagline */}
        <p className="loader-tagline">Frontend Engineer &amp; UI/UX Designer</p>

        {/* Progress bar */}
        <div className="loader-bar-wrap" aria-label="Loading…">
          <div className="loader-bar" />
        </div>

        {/* Dot pulse */}
        <div className="loader-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Corner decorations */}
      <span className="loader-corner loader-corner-tl" aria-hidden="true" />
      <span className="loader-corner loader-corner-tr" aria-hidden="true" />
      <span className="loader-corner loader-corner-bl" aria-hidden="true" />
      <span className="loader-corner loader-corner-br" aria-hidden="true" />
    </div>
  );
}
