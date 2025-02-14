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
      image:
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80',
    },
    {
      id: 'headphones',
      name: 'Наушники',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    },
    {
      id: 'accessories',
      name: 'Аксессуары',
      image:
        'https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3%3D&auto=format&fit=crop&w=1728&q=80',
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
