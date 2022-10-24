import { useContext } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { StateContext, StateDispatchContext } from "../../app/StateContext";
import { animated, useSpring } from "react-spring";
import { Types } from "../../app/state.interface";
const NavDrawer = () => {
  const { isDrawerOpen } = useContext(StateContext);
  const dispatch = useContext(StateDispatchContext);
  const styles = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 700,
  });

  function handleOpenDrawer() {
    dispatch({ type: Types.OPEN_DRAWER });
  }

  return (
    <animated.span style={styles} onClick={handleOpenDrawer}>
      <IoIosArrowDropleft
        className={`text-light-emerald-20 w-7 h-7 md:hidden cursor-pointer ${
          isDrawerOpen && "rotate-180"
        }`}
      />
    </animated.span>
  );
};

export default NavDrawer;
