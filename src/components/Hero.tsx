import React from 'react';
import { Clock, MapPin, Phone, Star } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background-pattern">
        <div className="hero-green-blur"></div>
        <div className="hero-orange-blur"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="hero-star">
                <Star className="w-6 h-6 text-orange-400" />
                <span className="text-orange-400 font-semibold">Depuis 2008 à Condrieu</span>
              </div>
              
              <h2 className="hero-title">
                <span className="hero-title-gradient">Nes Kebab</span>
                <span className="hero-subtitle">Saveurs Authentiques</span>
              </h2>
            </div>
            
            <p className="hero-description">
              Découvrez nos spécialités turques préparées avec des ingrédients frais et des recettes traditionnelles. 
              Kebabs, lahmacun, assiettes généreuses... Une expérience gustative unique vous attend !
            </p>

            <div className="hero-buttons">
              <a href="#menu" className="hero-order-button">Commander Maintenant</a>
              <a href="tel:0482629386" className="hero-call-button">04 82 62 93 86</a>
            </div>

            <div className="hero-infos">
              <div className="hero-info-item">
                <Clock className="w-6 h-6 text-green-400" />
                <div>
                  <p className="font-semibold">Ouvert</p>
                  <p className="text-sm">11h - 23h</p>
                </div>
              </div>
              
              <div className="hero-info-item">
                <MapPin className="w-6 h-6 text-green-400" />
                <div>
                  <p className="font-semibold">Condrieu</p>
                  <p className="text-sm">69420</p>
                </div>
              </div>
              
              <div className="hero-info-item">
                <Phone className="w-6 h-6 text-green-400" />
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-sm">04 82 62 93 86</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img
                src="/public/neskebab.jpg"
                alt="Menu Nes Kebab"
                className="hero-image"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
                }}
              />
              <div className="hero-image-overlay"></div>
            </div>
            
            <div className="hero-green-pulse"></div>
            <div className="hero-orange-pulse"></div>
            
            <div className="hero-badge">
              <span className="font-bold">✨ Spécialités Turques</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
