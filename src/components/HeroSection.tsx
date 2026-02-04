import useIsDesktop from '../hooks/useIsDesktop';
import MiniTitleWithBar from './MiniTitleWithBar';

export default function HeroSection({ contentMiniBar = "", firstTitle = "", secondTitle = "" }) {
    const isDesktop = useIsDesktop();

    return (
        <section
            id="hero"
            className="grid min-h-[100dvh] items-center relative z-5"
            >
            <div
                className={`flex flex-col justify-between h-full w-full ${isDesktop ? "py-40 px-20" : "py-16 px-5"}`}>
                {/* Section Titre Haut */}
                <div>
                    <div className="relative ps-0 mb-3 text-white">
                        <MiniTitleWithBar content={contentMiniBar} />
                    </div>
                    <h1 className="text-black cormorant-garamond self-start max-w-[400px] text-4xl md:text-5xl italic">
                        {firstTitle}
                    </h1>
                </div>

                {/* Section Titre Bas */}
                <h1 className="text-black playfair-display self-end text-right max-w-[400px] text-4xl md:text-5xl " style={{
                    maxWidth: "400px"
                }}>
                    {secondTitle}
                </h1>
            </div>
        </section>
    );
}