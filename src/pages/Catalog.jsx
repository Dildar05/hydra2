import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { getCategories, getProductsByCategory } from '../lib/index';

export default function Catalog() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryFromUrl = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl || 'all');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = getCategories();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const products = await getProductsByCategory(activeCategory);
      setProducts(products);
      setLoading(false);
    };

    fetchProducts();
  }, [activeCategory]);

  useEffect(() => {
    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  return (
    <div className='pt-24 pb-12'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold mb-8'>Каталог товаров</h1>

        {/* Categories Filter */}
        <div className='flex flex-wrap gap-4 mb-8'>
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full font-medium transition-colors
              ${activeCategory === 'all' ? 'bg-green-500 text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            Все товары
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-colors
                ${
                  activeCategory === category.id
                    ? 'bg-green-500 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
