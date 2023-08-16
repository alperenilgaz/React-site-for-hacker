import React from 'react';
import { useTrail, animated } from 'react-spring';
import infos from "../components/Info/infos.json";
import Info from './Info/Info';

function Content() {
  const trail = useTrail(infos.length, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { mass: 1, tension: 120, friction: 14 }, // Adjust these values for animation smoothness
    delay: 700 // Delay between each animation in milliseconds
  });

  return (
    <main>
      {trail.map((styles, index) => (
        <animated.div key={index} style={{ ...styles }}>
          <Info
            title={infos[index].title}
            comment={infos[index].comment}
            github={infos[index].github}
          />
        </animated.div>
      ))}
    </main>
  );
}

export default Content;
