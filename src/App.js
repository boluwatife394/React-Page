import React from 'react';
import Design from './components/Design';
import './App.css';
import Responsive from './components/Responsive';
import Purpose from './components/Purpose';

function App() {
  return (
    <main className="App">
      <section>
        <div className="nav-container">
          <nav>
            <h1>Minutes</h1>
            <ul>
              <li>1800 1234 5678</li>
            </ul>
          </nav>
        </div>
        <div className="welcome">
          <h1>Meet Minutes Landing Page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
            perferendis voluptas. <br /> Nostrum animi quod magnam esse
            consequatur velit debitis facilis?
          </p>
          <div className="btn">
            <button className="promotion">Promotional Works</button>
            <button className="learn">Learn more</button>
          </div>
        </div>
      </section>
      <Design />
      <Responsive />
      <Purpose />
    </main>
  );
}

export default App;
