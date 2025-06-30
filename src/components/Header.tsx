import React from 'react';
import './../style/Header.css';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onCartToggle: () => void;
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({
  cartItemCount,
  onCartToggle,
  onMenuToggle,
  isMenuOpen
}) => {
  return (
    <header className="header">
      <div className="container-header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-circle">
              <span className="logo-letter">N</span>
            </div>
            <div>
              <h1 className="site-title">Nes'Kebab</h1>
              <p className="site-location">Condrieu</p>
            </div>
          </div>

          <nav className="nav-desktop">
            <a href="#home" className="nav-link">Accueil</a>
            <a href="#menu" className="nav-link">Menu</a>
            <a href="#about" className="nav-link">À Propos</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="actions">
            <div className="phone-info">
              <p className="phone-number">04 82 62 93 86</p>
              <p className="phone-label">Commandes</p>
            </div>
            
            <button onClick={onCartToggle} className="cart-button">
              <ShoppingCart className="icon" />
              {cartItemCount > 0 && (
                <span className="cart-count">{cartItemCount}</span>
              )}
            </button>

            <button onClick={onMenuToggle} className="menu-button">
              {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <a href="#home" className="nav-link">Accueil</a>
              <a href="#menu" className="nav-link">Menu</a>
              <a href="#about" className="nav-link">À Propos</a>
              <a href="#contact" className="nav-link">Contact</a>
              <div className="mobile-phone">
                <p className="phone-number">04 82 62 93 86</p>
                <p className="phone-label">Commandes</p>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
