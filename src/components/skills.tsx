"use client";
import { useEffect, useRef } from "react";

export default function InfiniteScrollSkills() {
    const skills = [
        "React", "Next.Js", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind", "Node.js"
    ];
    const marqueeElementsDisplayed = 8; // tampil 5 skill sekaligus (ubah sesuai kebutuhan)
    const marqueeRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("--marquee-elements-displayed", marqueeElementsDisplayed.toString());
        root.style.setProperty("--marquee-elements", skills.length.toString());

        // Duplikat elemen sebanyak yang tampil agar seamless
        if (marqueeRef.current) {
            for (let i = 0; i < marqueeElementsDisplayed; i++) {
                const node = marqueeRef.current.children[i].cloneNode(true);
                marqueeRef.current.appendChild(node);
            }
        }
    }, []);

    return (
        <div className="marquee w-full pointer-events-none">
            <ul className="marquee-content" ref={marqueeRef}>
                {skills.map((skill, i) => (
                    <li key={i}>
                        <span className="text-xl font-semibold text-gray-700 px-4 py-2 bg-gray-100 rounded">
                            {skill}
                        </span>
                    </li>
                ))}
            </ul>
            <style jsx global>{`
                :root {
                    --marquee-width: 100vw;
                    --marquee-height: 10rem;
                    --marquee-element-width: calc(100% / var(--marquee-elements-displayed));
                    --marquee-animation-duration: calc(var(--marquee-elements) * 2s);
                }
                .marquee {
                    height: var(--marquee-height);
                    background: transparent;
                    overflow: hidden;
                    position: relative;
                }
                .marquee-content {
                    list-style: none;
                    height: 100%;
                    display: flex;
                    align-items: start;
                    animation: scrolling var(--marquee-animation-duration) linear infinite;
                }
                @keyframes scrolling {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements))); }
                }
                .marquee-content li {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-shrink: 0;
                    width: var(--marquee-element-width);
                    max-height: 100%;
                    font-size: 1.5rem;
                    white-space: nowrap;
                }
                @media (max-width: 600px) {
                    :root {
                        --marquee-height: 3rem;
                        --marquee-elements-displayed: 3;
                    }
                }
            `}</style>
        </div>
    );
}