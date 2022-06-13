import styled from "styled-components";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  margin-right: 50px;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: #04a3ff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 50px;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxVariants = {
  entry: (back: boolean) => ({ x: back ? -500 : 500, opacity: 0, scale: 0 }),
  center: { x: 0, opacity: 1, scale: 1, transitioin: { duration: 0.3 } },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.3 },
  }),
};

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  stroke: white;
  stroke-width: 2;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 100px;
`;

const svgVariants = {
  start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
  end: {
    pathLength: 1,
    fill: "rgba(255,255,255,1)",
  },
};

function App() {
  const [click, setClick] = useState(false);
  const toggleClick = () => setClick((prev) => !prev);

  return (
    <Wrapper onClick={toggleClick}>
      <Box>
        {!click ? (
          <Circle layoutId="circle" style={{ borderRadius: 50 }} />
        ) : null}
      </Box>
      <Box>
        {click ? (
          <Circle layoutId="circle" style={{ borderRadius: 0 }} />
        ) : null}
      </Box>
    </Wrapper>
  );
}

export default App;
