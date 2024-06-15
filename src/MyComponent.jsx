import { useState } from 'react';
import './MyComponent.css';

// Import images
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

const MyComponent = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <h1>Reviews</h1>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Owners
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Startups
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Non-profits
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content active-content" : "content"}>
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div className={toggleState === 2 ? "content active-content" : "content"}>
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Placeat quidem natus iure necessitatibus incidunt
            labore corrupti, ut sit optio quisquam voluptatibus ipsam ratione
            error dolore.
          </p>
        </div>

        <div className={toggleState === 3 ? "content active-content" : "content"}>
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
        
        <div className="container__right">
          <div className="card">
            <img src={img1} alt="user" />
            <div className="card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="card__details">
                <p>
                  We had a great time collaborating with the Filament team. They
                  have my high recommendation!
                </p>
                <h4>- Marnus Stephen</h4>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} alt="user" />
            <div className="card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="card__details">
                <p>
                  The team drastically improved our product&apos;s user experience &amp;
                  increased our business outreach.
                </p>
                <h4>- Andrew Jettpace</h4>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} alt="user" />
            <div className="card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="card__details">
                <p>
                  I absolutely loved working with the Filament team. Complete
                  experts at what they do!
                </p>
                <h4>- Stacy Stone</h4>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} alt="user" />
            <div className="card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="card__details">
                <p>
                  I absolutely loved working with the Filament team. Complete
                  experts at what they do!
                </p>
                <h4>- Stacy Stone</h4>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} alt="user" />
            <div className="card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="card__details">
                <p>
                  I absolutely loved working with the Filament team. Complete
                  experts at what they do!
                </p>
                <h4>- Stacy Stone</h4>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} alt="user" />
            <div className="card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="card__details">
                <p>
                  I absolutely loved working with the Filament team. Complete
                  experts at what they do!
                </p>
                <h4>- Stacy Stone</h4>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} alt="user" />
            <div className="card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="card__details">
                <p>
                  I absolutely loved working with the Filament team. Complete
                  experts at what they do!
                </p>
                <h4>- Stacy Stone</h4>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} alt="user" />
            <div className="card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="card__details">
                <p>
                  I absolutely loved working with the Filament team. Complete
                  experts at what they do!
                </p>
                <h4>- Stacy Stone</h4>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} alt="user" />
            <div className="card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="card__details">
                <p>
                  I absolutely loved working with the Filament team. Complete
                  experts at what they do!
                </p>
                <h4>- Stacy Stone</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
