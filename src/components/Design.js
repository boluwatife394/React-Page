import React from 'react';
import jquery from './jquery.png';
import bootstrap from './bootstrap.png';
import envato from './envato.png';
import monitor from './monitor.png';
import bike from './bike.png';
import calendar from './calendar.png';
import cube1 from './cube1.png';
import matebook from './matebook.png';

export default function Design() {
  return (
    <section className="landing">
      <div className="sites">
        <p>
          <img src={bootstrap} alt="" />
          bootstrap
        </p>
        <p>
          <img src={envato} alt="" />
          envato
        </p>
        <p>
          <img src={jquery} alt="" />
          jquery
        </p>
        <p>
          <img src={bootstrap} alt="" />
          bootstrap
        </p>
        <p>
          <img src={envato} alt="" />
          envato
        </p>
      </div>
      <h1>
        We have built a Amazing <br /> Landing Page Multi purpose kit
      </h1>
      <div className="pages">
        <div>
          <img src={monitor} alt="cube1" />
          <h3>Our layouts</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. ipsum?
          </p>
        </div>
        <div>
          <img src={calendar} alt="cube1" />
          <h3>Our Time Sketch</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. ipsum?
          </p>
        </div>
        <div>
          <img src={bike} alt="cube1" />
          <h3>Our Deliveries</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. ipsum?
          </p>
        </div>
        <div>
          <img src={cube1} alt="cube1" />
          <h3>3d display</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. ipsum?
          </p>
        </div>
      </div>
      <div className="design">
        <img src={matebook} alt="" />
        <div className="text">
          <h1>
            Responsive <br /> Design
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> A
            expedita ab, corporis libero nesciunt porro dicta dolores labore
            aperiam minus?
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
}
