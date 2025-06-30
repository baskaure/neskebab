import React from 'react';
import { Award, Clock, Users, Utensils, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Qualité Premium',
      description: 'Ingrédients frais sélectionnés avec soin pour une qualité irréprochable'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Service Rapide',
      description: 'Préparation rapide et livraison express pour satisfaire votre faim'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Équipe Experte',
      description: 'Chefs expérimentés passionnés par la cuisine turque authentique'
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Recettes Traditionnelles',
      description: 'Recettes authentiques transmises de génération en génération'
    }
  ];

  return (
    <section id="about" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="w-6 h-6 text-orange-400" />
              <span className="text-orange-400 font-semibold">Notre Histoire</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              À Propos de <span className="bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">Nes Kebab</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Depuis plus de 15 ans à Condrieu, Nes Kebab vous fait découvrir les saveurs authentiques 
              de la cuisine turque. Notre passion pour la gastronomie et notre engagement 
              envers la qualité font de chaque repas une expérience inoubliable.
            </p>

            <div className="flex items-center space-x-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">15+</div>
                <div className="text-sm text-gray-400">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">1000+</div>
                <div className="text-sm text-gray-400">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-gray-400">Excellence</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-green-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Chef préparant un kebab"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Restaurant intérieur"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mt-8"
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-600 to-orange-600 text-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <p className="text-3xl font-bold">2008</p>
                <p className="text-sm">Depuis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;