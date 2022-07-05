import React from "react";
import { StyledHero } from "./styles";
import { ReactTypical } from '@deadcoder0904/react-typical'
import { StyledArrow } from "../../styles/Animations";
import { HeroImage } from "./HeroImage";
import Link from "next/link";
import {
  StyledProjectsButton,
  StyledContactButton,
} from "../../styles/Buttons";
import Arrow from "../../public/icons/arrow.svg";

const Hero = () => {
  return (
    <StyledHero>
      <div className="hero-container">
        <div className="hero-description">
          <h1>
            Hi, I&apos;m
            <br />
            <span> Franco Sebastián Benítez</span>
          </h1>
          <ReactTypical
            steps={["👨🏻‍💻 A Developer", 2000, "🧠 A Psychologist", 2000]}
            loop={Infinity}
            wrapper="h2"
          />
          <div className="buttons">
            <StyledProjectsButton>
              <Link href="/#projects">
                <a className="button">See my work</a>
              </Link>
            </StyledProjectsButton>
            <StyledContactButton>
              <Link href="/#contact">
                <a className="button">Contact me</a>
              </Link>
            </StyledContactButton>
          </div>
        </div>
        <div className="hero-img">
          <HeroImage />
        </div>
      </div>
      <StyledArrow>
        <Link href="/#about" passHref>
          <a>
            <Arrow className="firstArrow" />
            <Arrow className="secondArrow" />
            <Arrow className="thirdArrow" />
          </a>
        </Link>
      </StyledArrow>
    </StyledHero>
  );
};

export default Hero;
