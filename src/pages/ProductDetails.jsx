import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getProduct } from '../lib/index';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const productData = await getProduct(id || '');
      setProduct(productData);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className='pt-24 pb-12'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold text-gray-500'>Загрузка...</h1>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className='pt-24 pb-12'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold text-red-500'>Товар не найден</h1>
        </div>
      </div>
    );
  }

  return (
    <div className='pt-24 pb-12'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Product Image */}
          <div className='relative mt-8'>
            <div className='absolute -inset-4 bg-green-500/20 blur-3xl rounded-full'></div>
            <img
              src={product.image}
              alt={product.title}
              className={`relative rounded-lg shadow-2xl ${
                product.category === 'accessories' || product.category === 'headphones'
                  ? 'w-1/2 mx-auto' // для аксессуаров и наушников картинка будет меньше и по центру
                  : 'w-full' // для остальных категорий полный размер
              }`}
            />
          </div>

          {/* Product Info */}
          <div className='space-y-6'>
            <h1 className='text-4xl font-bold'>{product.title}</h1>
            <p className='text-gray-400 text-lg'>{product.fullDescription}</p>
            <div className='text-3xl font-bold text-green-500'>
              {product.price ? product.price.toLocaleString() : 'Цена не указана'} ₸
            </div>

            <Link
              to={product.buyLink}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-green-500 text-black px-8 py-3 rounded-full 
                font-semibold flex items-center space-x-2 hover:bg-green-400 
                transition-colors group inline-flex'
            >
              <span>Купить сейчас</span>
              <ChevronRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </Link>

            {/* Specifications */}
            <div className='mt-8'>
              <h2 className='text-2xl font-bold mb-4'>Характеристики</h2>
              <div className='space-y-4'>
                {product.specs && product.specs.length > 0 ? (
                  product.specs.map((spec, index) => (
                    <div
                      key={index}
                      className='flex flex-col sm:flex-row justify-between py-2 border-b border-green-500/20 gap-2'
                    >
                      <span className='text-gray-400'>{spec.name}</span>
                      <span className='font-medium sm:text-right'>{spec.value}</span>
                    </div>
                  ))
                ) : (
                  <p className='text-gray-400'>Характеристики не указаны</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Video Review Section */}
        {product.videoReview && (
          <div className='mt-16'>
            <h2 className='text-2xl font-bold mb-6'>Видеообзор</h2>
            <div className='aspect-w-16 aspect-h-9'>
              <iframe
                src={product.videoReview}
                title='Product Review'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className='w-full h-[600px] rounded-lg'
              ></iframe>
            </div>
          </div>
        )}

        {/* Drivers Section for Laptops */}
        {product.drivers && (
          <div className='mt-16'>
            <h2 className='text-2xl font-bold mb-6'>Драйверы и ПО</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {product.drivers.map((driver, index) => (
                <a
                  key={index}
                  href={driver.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-gray-900 p-6 rounded-lg border border-green-500/20 
                    hover:border-green-500 transition-colors group flex items-center 
                    justify-between'
                >
                  <span className='font-medium'>{driver.name}</span>
                  <Download
                    className='w-5 h-5 text-green-500 group-hover:scale-110 
                    transition-transform'
                  />
                </a>
              ))}
            </div>
            <p className='mt-4 text-gray-400 text-sm'>
              * Рекомендуется регулярно обновлять драйверы для оптимальной производительности
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
