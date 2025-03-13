import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { getCategories, getProducts } from '../lib/index';
import { SlidersHorizontal } from 'lucide-react';

export default function Catalog() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const categoryFromUrl = searchParams.get('category') || 'all';
  const minPriceFromUrl = Number(searchParams.get('minPrice')) || 0;
  const maxPriceFromUrl = Number(searchParams.get('maxPrice')) || 0;

  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [maxPrice, setMaxPrice] = useState(0);
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl);
  const [priceRange, setPriceRange] = useState([minPriceFromUrl, maxPriceFromUrl]);
  const [showFilters, setShowFilters] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        const cats = await getCategories();
        const maxPr = Math.max(...products.map((product) => product.price));

        setAllProducts(products);
        setCategories(cats);
        setMaxPrice(maxPr);
        setPriceRange([minPriceFromUrl || 0, maxPriceFromUrl || maxPr]);
        setLoading(false);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [minPriceFromUrl, maxPriceFromUrl]);

  // Обновляем URL при изменении фильтров
  const updateUrlParams = (category, [min, max]) => {
    const params = new URLSearchParams();
    if (category !== 'all') params.set('category', category);
    if (min > 0) params.set('minPrice', min);
    if (max < maxPrice) params.set('maxPrice', max);

    navigate(`?${params.toString()}`, { replace: true });
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    const filteredProducts =
      categoryId === 'all' ? allProducts : allProducts.filter((product) => product.category === categoryId);
    const newMaxPrice = Math.max(...filteredProducts.map((product) => product.price));
    setMaxPrice(newMaxPrice);
    setPriceRange([0, newMaxPrice]);
    updateUrlParams(categoryId, [0, newMaxPrice]);
  };

  const leftPercentage = (priceRange[0] / maxPrice) * 100;
  const rightPercentage = (priceRange[1] / maxPrice) * 100;

  const filteredProducts = allProducts.filter((product) => {
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    return true;
  });

  const clearFilters = () => {
    setActiveCategory('all');
    const allProductsMaxPrice = Math.max(...allProducts.map((product) => product.price));
    setMaxPrice(allProductsMaxPrice);
    setPriceRange([0, allProductsMaxPrice]);
    navigate(''); // Очищаем URL параметры
  };

  const handleMinPriceChange = (e) => {
    const value = Math.min(Number(e.target.value), priceRange[1] - 1000);
    const newRange = [value, priceRange[1]];
    setPriceRange(newRange);
    updateUrlParams(activeCategory, newRange);
  };

  const handleMaxPriceChange = (e) => {
    const value = Math.max(Number(e.target.value), priceRange[0] + 1000);
    const newRange = [priceRange[0], value];
    setPriceRange(newRange);
    updateUrlParams(activeCategory, newRange);
  };

  if (loading) {
    return (
      <div className='pt-24 pb-12'>
        <div className='container mx-auto px-4'>
          <div className='text-center'>
            <p className='text-xl'>Загрузка...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='pt-24 pb-12'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-4xl font-bold'>Каталог товаров</h1>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className='flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full 
              hover:bg-gray-700 transition-colors md:hidden'
          >
            <SlidersHorizontal className='w-5 h-5' />
            Фильтры
          </button>
        </div>

        <div className='flex flex-col md:flex-row gap-8'>
          {/* Filters Sidebar */}
          <div className={`md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className='bg-gray-900 p-6 rounded-lg border border-green-500/20 sticky top-24'>
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl font-bold'>Фильтры</h2>
                <button onClick={clearFilters} className='text-sm text-brand hover:text-green-400 transition-colors'>
                  Сбросить
                </button>
              </div>

              {/* Categories */}
              <div className='mb-6'>
                <h3 className='font-semibold mb-3'>Категории</h3>
                <div className='space-y-2'>
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`w-full text-left px-3 py-2 rounded transition-colors ${
                      activeCategory === 'all' ? 'bg-green-500 text-black' : 'hover:bg-gray-800'
                    }`}
                  >
                    Все товары
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        activeCategory === category.id ? 'bg-green-500 text-black' : 'hover:bg-gray-800'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className='mb-6'>
                <h3 className='font-semibold mb-3'>Цена</h3>
                <div className='space-y-4'>
                  <div className='price-range-slider'>
                    <div
                      className='range-slider'
                      style={{
                        left: `${leftPercentage}%`,
                        right: `${100 - rightPercentage}%`,
                      }}
                    ></div>
                    <input type='range' min='0' max={maxPrice} value={priceRange[0]} onChange={handleMinPriceChange} />
                    <input type='range' min='0' max={maxPrice} value={priceRange[1]} onChange={handleMaxPriceChange} />
                  </div>
                  <div className='flex justify-between text-sm text-gray-400'>
                    <span>{priceRange[0].toLocaleString()} ₸</span>
                    <span>{priceRange[1].toLocaleString()} ₸</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className='flex-1'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className='text-center py-12'>
                <p className='text-gray-400 text-lg'>
                  По вашему запросу ничего не найдено. Попробуйте изменить параметры фильтрации.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
