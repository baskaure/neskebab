import React, { useState } from 'react';
import { X, User, Mail, Phone, MapPin } from 'lucide-react';
import { Customer } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  onConfirm: (customer: Customer) => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  total,
  onConfirm
}) => {
  const [customer, setCustomer] = useState<Customer>({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(customer);
  };

  const handleInputChange = (field: keyof Customer, value: string) => {
    setCustomer(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Finaliser la commande</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Nom complet
              </label>
              <input
                type="text"
                required
                value={customer.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-emerald-500 focus:outline-none transition-colors"
                placeholder="Votre nom complet"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email
              </label>
              <input
                type="email"
                required
                value={customer.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-emerald-500 focus:outline-none transition-colors"
                placeholder="votre.email@exemple.com"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                Téléphone
              </label>
              <input
                type="tel"
                required
                value={customer.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-emerald-500 focus:outline-none transition-colors"
                placeholder="01 23 45 67 89"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Adresse de livraison
              </label>
              <textarea
                required
                value={customer.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                placeholder="Votre adresse complète de livraison"
              />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex justify-between text-white text-xl font-bold">
              <span>Total à payer</span>
              <span className="text-emerald-400">{total.toFixed(2)}€</span>
            </div>
          </div>

          <div className="bg-yellow-900 bg-opacity-50 border border-yellow-600 rounded-lg p-4">
            <p className="text-yellow-200 text-sm">
              <strong>Note :</strong> Pour activer les paiements en ligne, vous devez configurer Stripe. 
              Cette démo simule seulement le processus de commande.
            </p>
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Confirmer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;