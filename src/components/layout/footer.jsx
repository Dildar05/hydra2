import { Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className='bg-black/90 border-t border-customGreen py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-brand font-bold text-xl mb-4'>О компании</h3>
            <p className='text-gray-400'>
              HYDRA — ведущий производитель ноутбуков, наушников и аксессуаров для работы и игр. Передовые технологии
              для продуктивности и развлечений.
            </p>
          </div>
          <div>
            <h3 className='text-brand font-bold text-xl mb-4'>Навигация</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='text-gray-400 hover:text-brand'>
                  Главная
                </Link>
              </li>
              <li>
                <Link to='/catalog' className='text-gray-400 hover:text-brand'>
                  Каталог
                </Link>
              </li>
              <li>
                <Link to='/about' className='text-gray-400 hover:text-brand'>
                  О нас
                </Link>
              </li>
              <li>
                <Link to='/contacts' className='text-gray-400 hover:text-brand'>
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-brand font-bold text-xl mb-4'>Категории</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/catalog?category=laptops' className='text-gray-400 hover:text-brand'>
                  Ноутбуки
                </Link>
              </li>
              <li>
                <Link to='/catalog?category=headphones' className='text-gray-400 hover:text-brand'>
                  Наушники
                </Link>
              </li>
              <li>
                <Link to='/catalog?category=accessories' className='text-gray-400 hover:text-brand'>
                  Аксессуары
                </Link>
              </li>
              <li>
                <Link to='/catalog?category=monitors' className='text-gray-400 hover:text-brand'>
                  Мониторы
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-brand font-bold text-xl mb-4'>Контакты</h3>
            <ul className='space-y-4'>
              <li className='flex items-center space-x-2'>
                <Phone className='w-5 h-5 text-brand' />
                <a href='tel:+77004508335' className='text-gray-400 hover:text-brand'>
                  +7 (700) 450-83-35
                </a>
              </li>
              <li className='flex items-center space-x-2'>
                <Mail className='w-5 h-5 text-brand' />
                <a href='mailto:hydrashop2021@gmail.com' className='text-gray-400 hover:text-brand'>
                  hydrashop2021@gmail.com
                </a>
              </li>
              <li className='flex items-center space-x-2'>
                <MapPin className='w-5 h-5 text-brand' />
                <span className='text-gray-400'>Алматы, ул. Ауэзова, 52 Офис 1</span>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/hydra.kz/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center space-x-2 text-gray-400 hover:text-brand transition-colors'
                >
                  <Instagram className='w-5 h-5 text-brand' />
                  <span>@hydra.kz</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-customGreen text-center text-gray-400'>
          <p>&copy; 2025 HYDRA. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
