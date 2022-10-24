import Button from "./components/button";
import Description from "./components/description";
import FirstHeading from "./components/firstheading";
import Greet from "./components/greet";
import SecondHeading from "./components/secondheading";

const Hero = () => {
  return (
    <section className="flex flex-col gap-5 h-[88vh] justify-center">
      <Greet />
      <FirstHeading />
      <SecondHeading />
      <Description />
      <Button />
    </section>
  );
};

export default Hero;
