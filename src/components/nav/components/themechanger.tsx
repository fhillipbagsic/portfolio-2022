import { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { animated, useSpring } from "react-spring";
import { Types } from "../../app/state.interface";
import { StateContext, StateDispatchContext } from "../../app/StateContext";

const ThemeChanger = () => {
  const { darkMode } = useContext(StateContext);
  const dispatch = useContext(StateDispatchContext);
  const styles = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 900,
  });

  function handleSwitchMode() {
    dispatch({ type: Types.SWITCH_MODE });
  }

  return (
    <animated.span onClick={handleSwitchMode} style={styles}>
      {darkMode ? (
        <FiSun className=" text-yellow w-6 h-6 cursor-pointer" />
      ) : (
        <FiMoon className="text-purple w-6 h-6 cursor-pointer" />
      )}
    </animated.span>
  );
};

export default ThemeChanger;
