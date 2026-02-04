import '../styles/flow.scss'

export default function Flowers() {
    // Array to handle the repetitive grass/leaf sections efficiently
    

    return (
        <>
            <div className="night"></div>
            <div className="flowers flex items-center justify-center  relative">
                {/* Individual Flowers */}
                {[1].map((num) => (
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
                {/* {longGSections.map((section) => (
                    <div key={section.id} className={`long-g long-g--${section.id}`}>
                        {section.delays.map((delay, index) => (
                            <div key={index} className="grow-ans" style={{ "--d": delay } as React.CSSProperties}>
                                <div className={`leaf leaf--${index}`}></div>
                            </div>
                        ))}
                    </div>
                ))} */}
            </div>
        </>
    );
}