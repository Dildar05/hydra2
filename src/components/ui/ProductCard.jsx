import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProductCard({ id, title, description, price, image, category }) {
  return (
    <Link to={`/product/${id}`} className='group'>
      <div
        className='bg-gray-900 rounded-lg overflow-hidden border border-green-500/20 
        transition-transform hover:scale-105'
      >
        <div className='relative'>
          <img src={image} alt={title} className='w-full h-48 object-cover' />
          <div className='absolute top-2 right-2'>
            <span className='bg-green-500 text-black px-2 py-1 rounded-full text-sm'>{category}</span>
          </div>
        </div>
        <div className='p-4'>
          <h3 className='text-xl font-bold text-white mb-2'>{title}</h3>
          <p className='text-gray-400 text-sm mb-4 line-clamp-2'>{description}</p>
          <div className='flex justify-between items-center'>
            <span className='text-green-500 font-bold'>{price} ₽</span>
            <button
              className='bg-green-500 text-black px-4 py-2 rounded-full text-sm 
              font-semibold hover:bg-green-400 transition-colors'
            >
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
