import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, CreditCard } from 'lucide-react';
import { CartItem, Customer } from '../types';
import CheckoutModal from './CheckoutModal';

import './../style/Cart.css'; // Import du CSS

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  const handleCheckout = (customer: Customer) => {
    console.log('Order placed:', { cartItems, customer, total });
    alert('Commande passée avec succès! Vous recevrez un email de confirmation.');
    onClearCart();
    setShowCheckout(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="overlay">
        <div className="cart-container">
          <div className="cart-header">
            <div className="cart-header-inner">
              <h2 className="cart-title">
                <ShoppingBag className="icon-small" />
                Panier
              </h2>
              <button onClick={onClose} className="close-btn">
                <X className="icon-small" />
              </button>
            </div>
          </div>

          <div className="cart-body">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <ShoppingBag className="icon-large gray-icon" />
                <p className="empty-text">Votre panier est vide</p>
                <button onClick={onClose} className="btn-continue">
                  Continuer vos achats
                </button>
              </div>
            ) : (
              <>
                <div className="items-list">
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="item-header">
                        <h3 className="item-name">{item.name}</h3>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="remove-btn"
                        >
                          <X className="icon-xs" />
                        </button>
                      </div>

                      <p className="item-desc">{item.description}</p>

                      <div className="item-footer">
                        <div className="quantity-control">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="qty-btn minus-btn"
                          >
                            <Minus className="icon-xs" />
                          </button>
                          <span className="qty-value">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="qty-btn plus-btn"
                          >
                            <Plus className="icon-xs" />
                          </button>
                        </div>

                        <span className="item-price">
                          {(item.price * item.quantity).toFixed(2)}€
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="summary">
                  <div className="summary-row">
                    <span>Sous-total</span>
                    <span>{subtotal.toFixed(2)}€</span>
                  </div>
                  <div className="summary-row">
                    <span>TVA (10%)</span>
                    <span>{tax.toFixed(2)}€</span>
                  </div>
                  <div className="summary-row total-row">
                    <span>Total</span>
                    <span className="total-amount">{total.toFixed(2)}€</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowCheckout(true)}
                  className="btn-checkout"
                >
                  <CreditCard className="icon-xs mr-1" />
                  Passer Commande
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {showCheckout && (
        <CheckoutModal
          isOpen={showCheckout}
          onClose={() => setShowCheckout(false)}
          total={total}
          onConfirm={handleCheckout}
        />
      )}
    </>
  );
};

export default Cart;
