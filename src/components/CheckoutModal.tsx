import React, { useState } from 'react';
import { X, User, Mail, Phone, MapPin } from 'lucide-react';
import { Customer } from '../types';
import './../style/CheckoutModal.css'; // import du CSS séparé

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
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">Finaliser la commande</h2>
          <button onClick={onClose} className="modal-close-button">
            <X className="icon" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="modal-fields">
            <div className="modal-field">
              <label className="modal-label">
                <User className="icon-small" />
                Nom complet
              </label>
              <input
                type="text"
                required
                value={customer.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="modal-input"
                placeholder="Votre nom complet"
              />
            </div>

            <div className="modal-field">
              <label className="modal-label">
                <Mail className="icon-small" />
                Email
              </label>
              <input
                type="email"
                required
                value={customer.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="modal-input"
                placeholder="votre.email@exemple.com"
              />
            </div>

            <div className="modal-field">
              <label className="modal-label">
                <Phone className="icon-small" />
                Téléphone
              </label>
              <input
                type="tel"
                required
                value={customer.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="modal-input"
                placeholder="01 23 45 67 89"
              />
            </div>

            <div className="modal-field">
              <label className="modal-label">
                <MapPin className="icon-small" />
                Adresse de livraison
              </label>
              <textarea
                required
                value={customer.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                rows={3}
                className="modal-textarea"
                placeholder="Votre adresse complète de livraison"
              />
            </div>
          </div>

          <div className="modal-total">
            <div className="modal-total-text">
              <span>Total à payer</span>
              <span className="total-amount">{total.toFixed(2)}€</span>
            </div>
          </div>

          <div className="modal-note">
            <p>
              <strong>Note :</strong> Pour activer les paiements en ligne, vous devez configurer Stripe. 
              Cette démo simule seulement le processus de commande.
            </p>
          </div>

          <div className="modal-actions">
            <button
              type="button"
              onClick={onClose}
              className="btn-cancel"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="btn-confirm"
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
