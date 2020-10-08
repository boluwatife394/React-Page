import React from 'react';
import cellphone from './mobile.png';

export default function Purpose() {
  return (
    <section className="purpose">
      <div className="content">
        <h1>
          Multipurpose <br /> Template
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, tempore
          eum facilis non harum magnam et inventore natus similique maiores
          voluptas, iste temporibus corrupti culpa rem, pariatur nesciunt. Sed,
          deserunt.
        </p>
        <button>Learn more</button>
      </div>
      <div>
        <img src={cellphone} alt="" />
      </div>
    </section>
  );
}
