import { useSpring, animated } from "react-spring";

type DescriptionProps = {
  appear: boolean;
};
const Description = ({ appear }: DescriptionProps) => {
  const styles = useSpring({
    delay: 900,
    to: { opacity: appear ? 1 : 0, y: 0 },
    from: { opacity: 0, y: 0 },
  });

  return (
    <animated.div
      style={styles}
      className="text-justify text-light-gray-50 dark:text-dark-slate-50"
    >
      <p>
        My name is Fhillip Carl Bagsic and I am an aspiring web developer. I
        graduated from National University in the Philippines with a{" "}
        <span className="text-light-emerald-100 dark:text-dark-emerald-100 font-medium">
          Bachelor's Degree of Information Technology with Specialization in
          Mobile and Web Applications.
        </span>
      </p>
      <br />
      <p>
        During my undergraduate years, I had the privilege to work in a huge
        shipping company as an Intern and in my college faculty as a freelance
        developer. These cumulative experience helped me to build web
        applications that showcase all the tech stuffs that I've learned.
      </p>
      <br />
      <p>
        I am currently seeking a job focusing on web development. Below are the
        personal and comissioned projects that I've made.
      </p>
    </animated.div>
  );
};

export default Description;
