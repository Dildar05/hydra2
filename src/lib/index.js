import laptops from '../data/laptops.json';
import headphones from '../data/headphones.json';
import accessories from '../data/accessories.json';

const products = [...laptops, ...headphones, ...accessories];

export const getProducts = () => {
  return products;
};

export const getCategories = () => {
  return [
    {
      id: 'laptops',
      name: 'Ноутбуки',
      image: '/notebook.png',
    },
    {
      id: 'headphones',
      name: 'Наушники',
      image: '/head.png',
    },
    {
      id: 'accessories',
      name: 'Аксессуары',
      image: '/acses.png',
    },
  ];
};

export const getProduct = (id) => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category) => {
  return category === 'all' ? products : products.filter((product) => product.category === category);
};

export const getSlideProducts = () => {
  return products.filter((product) => product.slide === true);
};
