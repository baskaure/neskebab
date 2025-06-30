import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Contactez <span className="bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">Nous</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Une question ? Une commande spéciale ? N'hésitez pas à nous contacter !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 border-l-4 border-green-500">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Adresse</h3>
                  <p className="text-gray-300">
                    Rue de la Liberté<br />
                    69420 Condrieu, France
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 border-l-4 border-orange-500">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
                  <p className="text-gray-300 text-2xl font-bold text-green-400">04 82 62 93 86</p>
                  <p className="text-gray-400 text-sm">Commandes et renseignements</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 border-l-4 border-green-500">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">contact@nes-kebab.fr</p>
                  <p className="text-gray-400 text-sm">Réponse sous 24h</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 border-l-4 border-orange-500">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-3 rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Horaires</h3>
                  <div className="text-gray-300 space-y-1">
                    <p>Lundi - Dimanche : 11h00 - 23h00</p>
                    <p className="text-green-400 font-semibold">Ouvert 7j/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nom</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Sujet</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;