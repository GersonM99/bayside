import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">La clave de la buena mesa</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Que la tierra sea tomada, pero vivamos de la vejez del empleado. La salsa de la enfermedad es más fácil que los problemas térmicos de los sabios. Y, el hogar de una tierra divertida</p>
      <button type="button" className="custom__button">Conoce el menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
