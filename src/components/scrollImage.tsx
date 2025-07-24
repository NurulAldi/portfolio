"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ScrollImage({ sectionSelector = "#project-section" }) {
    const [progress, setProgress] = useState(0);

    const imgHeight = 1200;
    const frameHeight = 190;

    useEffect(() => {
    const handleScroll = () => {
        const section = document.querySelector(sectionSelector);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height;

        const start = windowHeight - sectionHeight / 3;
        const end = -sectionHeight;

        let progress = 0;
        if (rect.top < start && rect.bottom > 0) {
            progress = (start - rect.top) / (start - end);
            progress = Math.max(0, Math.min(1, progress));
        } else {
            progress = 0;
        }
        setProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
    };
  }, [sectionSelector]);

    const maxImgMove = imgHeight - frameHeight;
    const imgOffset = progress * maxImgMove;

    return (
        <div className="flex gap-2">
            <div
                style={{
                    width: 312,
                    height: frameHeight,
                    overflow: "hidden",
                    borderRadius: "8px",
                    position: "relative",
                }}
            >
                <Image
                    src={"/web-full.png"}
                    alt="desktop preview"
                    width={312}
                    height={imgHeight}
                    className="w-full"
                    style={{
                        display: "block",
                        position: "absolute",
                        top: -imgOffset,
                        left: 0,
                        transition: "top 0.1s linear",
                    }}
                />
            </div>
            <div
                style={{
                    width: 120,
                    height: frameHeight,
                    overflow: "hidden",
                    borderRadius: "8px",
                    position: "relative",
                }}
            >
                <Image
                    src={"/mobile-full.jpg"}
                    alt="mobile preview"
                    width={156}
                    height={imgHeight}
                    className="w-full"
                    style={{
                        display: "block",
                        position: "absolute",
                        top: -imgOffset,
                        left: 0,
                        transition: "top 0.1s linear",
                    }}
                />
            </div>
        </div>
    );
}