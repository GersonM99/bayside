import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Suscribete a nuestra revista</h1>
      <p className="p__opensans">¡Y nunca te pierdas las últimas actualizaciones!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Suscribete</button>
    </div>
  </div>
);

export default Newsletter;

