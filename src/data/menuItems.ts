import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Sandwichs
  {
    id: '1',
    name: 'Kebab',
    description: 'Pain pita, viande d\'agneau grillée, salade, tomates, oignons, sauce au choix',
    price: 8.50,
    category: 'sandwichs',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    popular: true
  },
  {
    id: '2',
    name: 'Galette',
    description: 'Galette de blé, viande kebab, crudités, sauce maison',
    price: 8.50,
    category: 'sandwichs',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '3',
    name: 'Baguette',
    description: 'Pain baguette, viande kebab, salade, tomates, sauce',
    price: 8.50,
    category: 'sandwichs',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '4',
    name: 'Basmac',
    description: 'Spécialité maison avec viande marinée et épices orientales',
    price: 8.00,
    category: 'sandwichs',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '5',
    name: 'Escalope',
    description: 'Escalope de poulet grillée, crudités, sauce',
    price: 8.00,
    category: 'sandwichs',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '6',
    name: 'Tacos',
    description: 'Tortilla, viande au choix, fromage, frites, sauce',
    price: 9.00,
    category: 'sandwichs',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '7',
    name: 'Hamburger',
    description: 'Pain burger, steak haché, salade, tomates, fromage',
    price: 6.00,
    category: 'sandwichs',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },

  // Assiettes
  {
    id: '8',
    name: 'Kebab Assiette',
    description: 'Viande kebab, riz basmati, salade, sauce, pain pita',
    price: 13.00,
    category: 'assiettes',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    popular: true
  },
  {
    id: '9',
    name: 'Basmac Assiette',
    description: 'Spécialité basmac, riz, crudités, sauce orientale',
    price: 12.50,
    category: 'assiettes',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '10',
    name: 'Escalope Assiette',
    description: 'Escalope de poulet, riz, salade, sauce',
    price: 12.00,
    category: 'assiettes',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '11',
    name: 'Végétarienne Assiette',
    description: 'Falafels, riz, salade, légumes grillés, sauce tahini',
    price: 8.00,
    category: 'assiettes',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '12',
    name: 'Mixte Assiette',
    description: 'Mélange de viandes, riz, salade variée, sauces',
    price: 17.00,
    category: 'assiettes',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },

  // Lahmacun
  {
    id: '13',
    name: 'Lahmacun avec Kebab',
    description: 'Pain turc traditionnel, viande kebab, légumes frais',
    price: 10.00,
    category: 'lahmacun',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '14',
    name: 'Lahmacun sans Kebab',
    description: 'Pain turc traditionnel aux épices, légumes',
    price: 6.00,
    category: 'lahmacun',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '15',
    name: '2 Lahmacun + Boisson',
    description: 'Deux lahmacun traditionnels avec boisson au choix',
    price: 13.00,
    category: 'lahmacun',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },

  // Accompagnements
  {
    id: '16',
    name: 'Moyenne Frite',
    description: 'Portion moyenne de frites dorées',
    price: 3.00,
    category: 'accompagnements',
    image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '17',
    name: 'Grande Frite',
    description: 'Grande portion de frites croustillantes',
    price: 4.00,
    category: 'accompagnements',
    image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '18',
    name: 'Moyenne Viande',
    description: 'Portion moyenne de viande kebab',
    price: 12.00,
    category: 'accompagnements',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '19',
    name: 'Grande Viande',
    description: 'Grande portion de viande kebab',
    price: 15.00,
    category: 'accompagnements',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },

  // Menu Kids
  {
    id: '20',
    name: 'Menu Kids',
    description: 'Assiette kebab ou nuggets + frites et boisson',
    price: 7.00,
    category: 'menu-kids',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },

  // Boissons
  {
    id: '21',
    name: 'Boisson 33cl',
    description: 'Coca, Fanta, Sprite, Ice Tea',
    price: 2.00,
    category: 'boissons',
    image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '22',
    name: 'Thé Turc',
    description: 'Thé traditionnel turc servi chaud',
    price: 1.50,
    category: 'boissons',
    image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '23',
    name: 'Café',
    description: 'Café expresso ou café turc',
    price: 1.50,
    category: 'boissons',
    image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '24',
    name: 'Ayran',
    description: 'Boisson traditionnelle au yaourt',
    price: 2.00,
    category: 'boissons',
    image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '25',
    name: 'Volvic',
    description: 'Eau minérale naturelle',
    price: 2.00,
    category: 'boissons',
    image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '26',
    name: 'Bière Heineken',
    description: 'Bière blonde 25cl',
    price: 4.00,
    category: 'boissons',
    image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '27',
    name: 'Bière Desperados',
    description: 'Bière aromatisée tequila 33cl',
    price: 5.00,
    category: 'boissons',
    image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },

  // Menu Sandwich au choix + Boisson
  {
    id: '28',
    name: 'Menu Sandwich + Boisson',
    description: 'Sandwich au choix + boisson 33cl',
    price: 8.00,
    category: 'menus',
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    popular: true
  }
];

export const categories = [
  { id: 'sandwichs', name: 'Sandwichs', icon: '🥙' },
  { id: 'assiettes', name: 'Assiettes', icon: '🍽️' },
  { id: 'lahmacun', name: 'Lahmacun', icon: '🫓' },
  { id: 'accompagnements', name: 'Accompagnements', icon: '🍟' },
  { id: 'boissons', name: 'Boissons', icon: '🥤' },
  { id: 'menus', name: 'Menus', icon: '📋' },
  { id: 'menu-kids', name: 'Menu Kids', icon: '👶' }
];