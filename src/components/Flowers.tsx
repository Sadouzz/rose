import '../styles/flow.scss'
export default function Flowers() {
    // Array to handle the repetitive grass/leaf sections efficiently
    const longGSections = [
        { id: 0, delays: ["3s", "2.2s", "3.4s", "3.6s"] },
        { id: 1, delays: ["3.6s", "3.8s", "4s", "4.2s"] },
        { id: 2, delays: ["4s", "4.2s", "4.4s", "4.6s"] },
        { id: 3, delays: ["4s", "4.2s", "3s", "3.6s"] },
        { id: 4, delays: ["4s", "4.2s", "3s", "3.6s"] },
        { id: 5, delays: ["4s", "4.2s", "3s", "3.6s"] },
        { id: 6, delays: ["4.2s", "4.4s", "4.6s", "4.8s"] },
        { id: 7, delays: ["3s", "3.2s", "3.5s", "3.6s"] },
    ];

    return (
        <>
            <div className="night"></div>
            <div className="flowers">
                {/* Individual Flowers */}
                {[1, 2, 3].map((num) => (
                    <div key={`flower-${num}`} className={`flower flower--${num}`}>
                        <div className={`flower__leafs flower__leafs--${num}`}>
                            {[1, 2, 3, 4].map((l) => (
                                <div key={l} className={`flower__leaf flower__leaf--${l}`}></div>
                            ))}
                            <div className="flower__white-circle"></div>
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
                            ))}
                        </div>
                        <div className="flower__line">
                            {[...Array(num === 1 ? 6 : 4)].map((_, i) => (
                                <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Decorative Grass and Elements */}
                {longGSections.map((section) => (
                    <div key={section.id} className={`long-g long-g--${section.id}`}>
                        {section.delays.map((delay, index) => (
                            <div key={index} className="grow-ans" style={{ "--d": delay }}>
                                <div className={`leaf leaf--${index}`}></div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}