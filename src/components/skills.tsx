"use client";
import { useEffect, useRef } from "react";

export default function InfiniteScrollSkills() {
    const skills = [
        { name: "React", icon: <img src="/uil_react.svg" alt="React" width={64} height={64} /> },
        { name: "Next.Js", icon: <img src="/nextjs.svg" alt="Next.Js" width={64} height={64} /> },
        { name: "HTML", icon: <img src="/html.svg" alt="HTML" width={64} height={64} /> },
        { name: "CSS", icon: <img src="/css.svg" alt="CSS" width={64} height={64} /> },
        { name: "JavaScript", icon: <img src="/javascript.svg" alt="JavaScript" width={64} height={64} /> },
        { name: "TypeScript", icon: <img src="/typescript.svg" alt="TypeScript" width={64} height={64} /> },
        { name: "Tailwind", icon: <img src="/tailwind.svg" alt="Tailwind" width={64} height={64} /> },
        { name: "Node.js", icon: <img src="/nodejs.svg" alt="Node.js" width={64} height={64} /> },
        { name: "Git", icon: <img src="/git.svg" alt="Git" width={64} height={64} /> },
    ];
    const marqueeElementsDisplayed = 8;
    const marqueeElementsDisplayedMobile = 5;
    const marqueeRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("--marquee-elements-displayed", marqueeElementsDisplayed.toString());
        root.style.setProperty("--marquee-elements-displayed-mobile", marqueeElementsDisplayedMobile.toString());
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
                        <span className="text-xl font-semibold text-gray-700 px-4 py-2 bg-transparent rounded">
                            {skill.icon}
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
                        --marquee-element-width: calc(100% / var(--marquee-elements-displayed-mobile));
                    }
                }
            `}</style>
        </div>
    );
}