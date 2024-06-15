import { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.tilt');
    VanillaTilt.init(elements, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": .18,
    });

    return () => {
      elements.forEach((element) => {
        element.vanillaTilt.destroy();
      });
    };
  }, []);

  return (
    <section className="about">
      <div className="animated-text">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur
          adipisicing elit. Debitis perspiciatis illo earum veritatis tempora
          eligendi molestias obcaecati quo eaque ad
        </h1>
      </div>
      <div className="about-main">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor, Quam excepturi odit itaque facere consequatur alias
          blanditiis fugiat. Rerum sunt provident nihil architecto, repudiandae
          tempora delectus laudantium labore at voluptas quia? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Praesentium dolor ullam
          pariatur, necessitatibus incidunt facere voluptates ipsam 
        </p>
      </div>
      <div className="stuff">
        <div className="item tilt" data-tilt>
          <h2>27.1k</h2>
          <span>loremmaaat</span>
        </div>
        <div className="item tilt" data-tilt>
          <h2>27.1k</h2>
          <span>loremmaaat</span>
        </div>
        <div className="item tilt" data-tilt>
          <h2>27.1k</h2>
          <span>loremmaaat</span>
        </div>
        <div className="item tilt" data-tilt>
          <h2>27.1k</h2>
          <span>loremmaaat</span>
        </div>
      </div>
    </section>
  );
};

export default About;
