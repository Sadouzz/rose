import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import '../styles/SplitScrollText.css'
// Assurez-vous d'avoir installé les types ou que votre fichier gsap-bonus.d.ts est présent
gsap.registerPlugin(ScrollTrigger, SplitText);

interface SplitScrollTextProps {
    text?: string;
}

export default function SplitScrollText({
    text = "This demo shows the correct way to set up your SplitText line animations..."
}: SplitScrollTextProps) {

    // Typage de la ref pour un tableau d'éléments HTML
    const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // gsap.context est génial pour le cleanup automatique en React
        let ctx = gsap.context(() => {
            gsap.set(".splitComp", { opacity: 1 });

            // On attend que les polices soient chargées pour éviter un mauvais calcul du SplitText
            document.fonts.ready.then(() => {
                containerRefs.current.forEach((container) => {
                    if (!container) return;

                    const targetText = container.querySelector<HTMLElement>(".splitComp");
                    if (!targetText) return;

                    SplitText.create(targetText, {
                        type: "lines",
                        linesClass: "line",
                        autoSplit: true,
                        onSplit: (instance) => {
                            // On retourne l'animation pour qu'elle soit gérée par le cycle autoSplit
                            return gsap.from(instance.lines, {
                                yPercent: 120,
                                stagger: 0.08,
                                ease: "power2.out",
                                duration: 0.6,
                                scrollTrigger: {
                                    trigger: container,
                                    start: "top center+=100",
                                    toggleActions: "play none none reverse",
                                }
                            });
                        }
                    });
                });
            });
        });

        return () => ctx.revert(); // Nettoyage complet
    }, []);

    return (
        <>
            {[0].map((_, i) => (
                <div
                    className=""
                    key={i}
                    ref={(el) => { containerRefs.current[i] = el; }}
                >
                    <h2 className="splitComp hero-title">{text}</h2>
                </div>
            ))}
            <div className="spacer" />
        </>
    );
}