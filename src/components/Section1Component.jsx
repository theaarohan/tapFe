import React, { useEffect } from "react";
import anime from "animejs";
import "../componentStyles/Section1.css"

const Section1Component = () => {
  useEffect(() => {
    // Animation function
    const animateLetters = () => {
      const letters = document.querySelectorAll(".animated-letter");

      anime({
        targets: letters,
        opacity: 1,
        translateY: [-50, 0],
        easing: "easeOutExpo",
        delay: anime.stagger(40),
      });
    };

    animateLetters();
  }, []);
  

  return (
    <section className="hero">
      <div className="text-container">
        <span className="animated-letter">T</span>
        <span className="animated-letter">H</span>
        <span className="animated-letter">E</span>
        <span className=""> </span>
        <span className="animated-letter">A</span>
        <span className="animated-letter">A</span>
        <span className="animated-letter">R</span>
        <span className="animated-letter">O</span>
        <span className="animated-letter">H</span>
        <span className="animated-letter">A</span>
        <span className="animated-letter">N</span>
        <span className=""> </span>
        <span className="animated-letter">P</span>
        <span className="animated-letter">R</span>
        <span className="animated-letter">O</span>
        <span className="animated-letter">J</span>
        <span className="animated-letter">E</span>
        <span className="animated-letter">C</span>
        <span className="animated-letter">T</span>
      </div>
      <div className="animated-letter">Est. 2020</div>
      

    </section>

  );
};

export default Section1Component;