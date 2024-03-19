import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Our dining restaurant offers a fusion of exquisite flavors and a welcoming ambiance. With a passion for culinary excellence, we aim to delight guests with every dish. From locally sourced ingredients to creative presentations, our menu reflects our commitment to delivering exceptional dining experiences.
            </p>
            <Link
                to='qualities'
                spy={true}
                smooth={true}
                duration={500}
              >
                  Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
