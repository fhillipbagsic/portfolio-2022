import { useSpring, animated } from "react-spring";
import image from "../../../assets/image.jpg";

type ImageProps = {
  appear: boolean;
};

const Image = ({ appear }: ImageProps) => {
  const styles = useSpring({
    delay: 1000,
    to: { opacity: appear ? 1 : 0, y: 0 },
    from: { opacity: 0, y: 0 },
  });
  return (
    <animated.img
      src={image}
      alt="profile"
      className=" w-60 h-60 object-contain rounded-full grayscale hover:grayscale-0"
      style={styles}
    />
  );
};

export default Image;
