import { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

// Import your images
import chatImage from './images/chat.png';
import emojiImage from './images/emoji-very-happy-alt.png';
import megaphoneImage from './images/megaphone.png';
import rocketImage from './images/rocket-launch.png';
import starImage from './images/star.png';
import userGroupImage from './images/user-group.png';

const Services = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.tilt');
    VanillaTilt.init(elements, {
      max: 25,
      speed: 400,
      scale: 1.05,
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
    <section className="service" id="services">
      <h1>Our Services</h1>
      <div className="box">
        <div className="item tilt">
          <h2>Community Management</h2>
          <img src={chatImage} alt="Community Management" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fuga maiores, reprehenderit beatae odit excepturi dicta repellendus</p>
        </div>
        <div className="item tilt">
          <h2>Affiliate Marketing</h2>
          <img src={emojiImage} alt="Affiliate Marketing" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fuga maiores, reprehenderit beatae odit excepturi dicta repellendus</p>
        </div>
        <div className="item tilt">
          <h2>Growth Marketing</h2>
          <img src={megaphoneImage} alt="Growth Marketing" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fuga maiores, reprehenderit beatae odit excepturi dicta repellendus</p>
        </div>
        <div className="item tilt">
          <h2>Ecommerce</h2>
          <img src={rocketImage} alt="Ecommerce" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fuga maiores, reprehenderit beatae odit excepturi dicta repellendus</p>
        </div>
        <div className="item tilt">
          <h2>SEO</h2>
          <img src={starImage} alt="SEO" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fuga maiores, reprehenderit beatae odit excepturi dicta repellendus</p>
        </div>
        <div className="item tilt">
          <h2>Branding</h2>
          <img src={userGroupImage} alt="Branding" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fuga maiores, reprehenderit beatae odit excepturi dicta repellendus</p>
        </div>
        <div className="shape one"></div>
        <div className="shape two"></div>
      </div>
    </section>
  );
};

export default Services;
