import React, { useEffect, useState } from 'react';
import '../styles/MagicGarden.css';

const Flower: React.FC<{ index: number }> = ({ index }) => (
  <div className={`flower flower--${index}`}>
    <div className={`flower__leafs flower__leafs--${index}`}>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className={`flower__leaf flower__leaf--${i}`}></div>
      ))}
      <div className="flower__white-circle"></div>
      {[...Array(8)].map((_, i) => (
        <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
      ))}
    </div>
    <div className="flower__line">
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
      ))}
    </div>
  </div>
);

const MagicGarden: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`garden-body ${!isLoaded ? 'not-loaded' : ''}`}>
      <div className="night"></div>
      <div className="flowers">
        <Flower index={1} />
        <Flower index={2} />
        <Flower index={3} />

        {/* Herbe grimpante */}
        <div className="growing-grass">
          <div className="flower__grass flower__grass--1">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`flower__grass__leaf flower__grass__leaf--${i + 1}`}></div>
            ))}
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

        {/* Décorations supplémentaires du code original */}
        <div className="flower__g-long">
          <div className="flower__g-long__top"></div>
          <div className="flower__g-long__bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default MagicGarden;