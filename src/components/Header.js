import React from 'react';
import { Link } from 'gatsby';
import Menu from './Menu';
import Hamburger from './Hamburger';
import logoMobile from '../images/logo-mobile.svg';
import MenuMobile from './MenuMobile';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu = (menuActive) => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img height="30" alt="Luckyluu Homepage" src={logoMobile} />
              <span className="brand-name">
                lucky
                <span>luu</span>
              </span>
            </Link>
          </div>
          <div className="logo-mobile">
            <Link to="/">
              <img height="30" alt="Luckyluu Homepage" src={logoMobile} />
            </Link>
          </div>
          <MenuMobile active={this.state.menuActive} />
          <Menu />
          <Hamburger toggleMenu={this.toggleMenu} />
        </div>
      </div>
    );
  }
}

export default Header;
