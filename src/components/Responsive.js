import React from 'react';
import meet from './meet.jpg';

export default function Responsive() {
  return (
    <section className="responsive">
      <img src={meet} alt="" />
      <div className="meet">
        <h1>
          Retina-Ready & <br /> Responsive
        </h1>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam
          quibusdam ipsa, quam qui nemo amet incidunt ipsum non ab?
        </h5>

        <p>
          <i class="fas fa-check"></i> Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <p>
          <i class="fas fa-check"></i> Lorem ipsum dolor sit amet consectetur..
        </p>
        <p>
          <i class="fas fa-check"></i> Lorem ipsum dolor sit amet.
        </p>
      </div>
    </section>
  );
}
