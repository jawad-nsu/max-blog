import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An showning Max"
          height={300}
          width={300}
        />
      </div>
      <h1>Hi, I'm Max</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React, Anguler or Vue
      </p>
    </section>
  );
};
export default Hero;
