const fetchJson = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  return response.json();
};

export const getProducts = async () => {
  const laptops = await fetchJson('/data/laptops.json');
  const headphones = await fetchJson('/data/headphones.json');
  const accessories = await fetchJson('/data/accessories.json');
  const monitors = await fetchJson('/data/monitors.json');
  const products = [...laptops, ...headphones, ...accessories, ...monitors];
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
    {
      id: 'monitors',
      name: 'Мониторы',
      image: '/monitor.png',
    },
  ];
};

export const getProduct = async (id) => {
  const products = await getProducts();
  const product = products.find((product) => product.id === id);
  return product;
};

export const getProductsByCategory = async (category) => {
  const products = await getProducts();
  return category === 'all' ? products : products.filter((product) => product.category === category);
};

export const getSlideProducts = async () => {
  const products = await getProducts();
  return products.filter((product) => product.slide === true);
};
