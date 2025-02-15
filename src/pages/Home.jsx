import { ChevronRight, Award, Zap, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { getCategories, getSlideProducts } from '../lib';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Home() {
  const categories = getCategories();
  const products = getSlideProducts();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className='pt-20'>
        <div className='container mx-auto px-4'>
          <div className='min-h-[calc(100vh-5rem)]'>
            <Swiper
              effect='fade'
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[Autoplay, Pagination, EffectFade]}
              className='h-[calc(100vh-5rem)]'
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className='grid md:grid-cols-2 gap-8 items-center h-full'>
                    <div className='space-y-6 slide-content'>
                      {/* <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='bg-green-500/10 p-4 rounded-lg inline-block'
                      >
                        <span className='text-green-500 font-semibold'>
                          {product.category === 'laptops'
                            ? 'Игровые ноутбуки'
                            : product.category === 'headphones'
                            ? 'Наушники'
                            : 'Аксессуары'}
                        </span>
                      </motion.div> */}
                      <motion.h1
                        className='text-5xl md:text-7xl font-bold'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        <span className='text-green-500'>{product.title}</span>
                      </motion.h1>
                      <motion.p
                        className='text-gray-400 text-lg max-w-xl'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        {product.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className='flex items-center space-x-4'
                      >
                        <span className='text-2xl font-bold text-green-500'>{product.price.toLocaleString()} ₽</span>
                        <Link
                          to={`/product/${product.id}`}
                          className='bg-green-500 text-black px-8 py-3 rounded-full 
                            font-semibold flex items-center space-x-2 hover:bg-green-400 
                            transition-all hover:scale-105 group inline-flex'
                        >
                          <span>Подробнее</span>
                          <ChevronRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                        </Link>
                      </motion.div>
                    </div>
                    <div className='relative product-image h-96'>
                      <div className='absolute -inset-4 bg-green-500/20 blur-3xl rounded-full'></div>
                      <img
                        style={{ paddingBottom: '30px' }}
                        src={product.image}
                        alt={product.title}
                        className='relative w-full h-full object-contain rounded-lg shadow-xl transform 
                          transition-all duration-500 hover:scale-105'
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <motion.h2 className='text-4xl font-bold mb-12 text-center' {...fadeInUp}>
            Наши <span className='text-green-500'>категории</span>
          </motion.h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/catalog?category=${category.id}`}
                  className='group relative overflow-hidden rounded-lg block'
                >
                  <div className='absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors'></div>
                  <img
                    src={category.image}
                    alt={category.name}
                    className='w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <h3
                      className='text-2xl font-bold text-white group-hover:text-green-500 
                      transition-colors'
                    >
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className='py-20 bg-gray-900'>
        <div className='container mx-auto px-4'>
          <motion.h2 className='text-4xl font-bold mb-12 text-center' {...fadeInUp}>
            Почему выбирают <span className='text-green-500'>HYDRA</span>
          </motion.h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className='p-6 rounded-lg border border-green-500/20 hover:border-green-500 
                  transition-colors group'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon
                  className='w-12 h-12 text-green-500 mb-4 group-hover:scale-110 
                  transition-transform'
                />
                <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
                <p className='text-gray-400'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className='text-center'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className='text-4xl font-bold text-green-500 mb-2'>{stat.value}</div>
                <div className='text-gray-400'>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: Zap,
    title: 'Инновации',
    description: 'Используем передовые технологии в каждом продукте',
  },
  {
    icon: Shield,
    title: 'Надежность',
    description: 'Гарантия качества и долговечности',
  },
  {
    icon: Award,
    title: 'Качество',
    description: 'Тщательный контроль на всех этапах производства',
  },
  {
    icon: Users,
    title: 'Поддержка',
    description: '24/7 служба поддержки клиентов',
  },
];

const stats = [
  { value: '10+', label: 'Лет на рынке' },
  { value: '50K+', label: 'Довольных клиентов' },
  { value: '100+', label: 'Сервисных центров' },
  { value: '24/7', label: 'Поддержка клиентов' },
];
