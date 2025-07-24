"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ScrollImage({ sectionSelector = "#project-section" }) {
    const [progress, setProgress] = useState(0);

    const imgHeight = 920;
    const frameHeight = 190;

    useEffect(() => {
    const handleScroll = () => {
        const section = document.querySelector(sectionSelector);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height;

        const start = windowHeight - sectionHeight / 3;
        const scrollDistance = Math.max(1, start - (windowHeight - imgHeight - (sectionHeight - frameHeight) / 3));
        const end = start - scrollDistance;

        let progress = 0;
        if (rect.top < start && rect.bottom > start - scrollDistance) {
            progress = (start - rect.top) / scrollDistance;
            progress = Math.max(0, Math.min(1, progress));
        } else if (rect.top <= start - scrollDistance) {
            // Jika sudah lewat batas bawah, progress tetap 1
            progress = 1;
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
  }, [sectionSelector, imgHeight, frameHeight]);

    const maxImgMove = imgHeight - frameHeight;
    const clampedProgress = Math.max(0, Math.min(1, progress));
    const imgOffset = clampedProgress * maxImgMove;

    return (
        <div className="flex flex-col lg:flex-row gap-2">
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