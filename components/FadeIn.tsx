import { useState, ReactNode, FC } from "react";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
}

const FadeIn: FC<FadeInProps> = ({ children, delay = 500 }) => {
  const [inView, setInview] = useState(false);

  const transition = useSpring({
    delay: delay ? delay : 500,
    to: {
      y: !inView ? 24 : 0,
      opacity: !inView ? 0 : 1,
    },
  });
  return (
    <Waypoint onEnter={() => setInview(true)}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  );
};

export default FadeIn;
