"use client";
import { useRef, useEffect, useState } from "react";

export default function ScrollFillNumber({ sectionSelector = "#project-section" }) {
  const [fillPercent, setFillPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        const section = document.querySelector(sectionSelector);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height;

        let progress = 0;
        if (rect.top < windowHeight && rect.bottom > 0){
            progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + sectionHeight)));
        }
        setFillPercent(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionSelector]);

  return (
    <div className="relative w-24 h-32">
        <div className="absolute inset-0 text-9xl font-bold text-transparent" style={{
            WebkitTextStroke: "2px #686868ff"
        }}>
            1
        </div>
        <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(${(1 - fillPercent) * 100}% 0 0 0)` }}
        >
            <div className="text-9xl font-bold text-gray-500">1</div>
        </div>
    </div>
  );
}