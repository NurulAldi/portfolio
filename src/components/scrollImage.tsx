"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ScrollImage() {
    const [scrollY, setScrollY] = useState(0);
    const imgHeight = 1200;
    const frameHeight = 190;

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const maxScroll = document?.body?.scrollHeight - window?.innerHeight || 1;
    const maxImgMove = imgHeight - frameHeight;
    const imgOffset = Math.min(
        maxImgMove,
        Math.max(0, (scrollY / maxScroll) * maxImgMove)
    );

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
                className="border"
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

        </div>
    );
}