import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProductCard({ id, title, description, price, image }) {
  return (
    <Link to={`/product/${id}`} className='group'>
      <div
        className='bg-gray-900 rounded-lg overflow-hidden border border-green-500/20 
        transition-transform hover:scale-105 flex flex-col h-[380px]'
      >
        <div className='relative h-48 flex items-center justify-center bg-black'>
          <img src={image} alt={title} className='max-w-full max-h-full object-contain' />
        </div>
        <div className='p-4 flex flex-col flex-grow'>
          <h3 className='text-xl font-bold text-white mb-2'>{title}</h3>
          <p className='text-gray-400 text-sm mb-4 line-clamp-2 flex-grow'>{description}</p>
          <div className='flex justify-between items-center mt-auto'>
            <span className='text-green-500 font-bold'>{price.toLocaleString()} ₸</span>
            <button
              className='bg-customGreen text-black px-4 py-2 rounded-full text-sm 
              font-semibold hover:bg-green-500 transition-colors'
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
};
