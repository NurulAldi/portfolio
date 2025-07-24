"use client";

export default function InfiniteScrollSkills() {

    return (
        <div className="relative overflow-hidden w-full pointer-events-none h-24">
            <div
            className="absolute flex gap-8 animate-marquee whitespace-nowrap"
            style={{ animation: "marquee 18s linear infinite" }}
            >
            {["React", "Next.Js", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind", "Node.js"].map((skill, i) => (
                <span key={i} className="text-xl font-semibold text-gray-700 px-4 py-2 bg-gray-100 rounded" >
                {skill}
                </span>
            ))}
            {["React", "Next.Js", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind", "Node.js"].map((skill, i) => (
                <span key={i + 100} className="text-xl font-semibold text-gray-700 px-4 py-2 bg-gray-100 rounded" >
                {skill}
                </span>
            ))}
            </div>
            <style jsx>{`
            @keyframes marquee {
                0% { left: 0; }
                100% { left: -50%; }
            }
            `}
            </style>
        </div>
    );
    
}