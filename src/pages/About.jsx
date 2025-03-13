import { Award, Shield, Zap, Laptop2, Headphones, Cpu } from 'lucide-react';

export default function About() {
  return (
    <div className='pt-24 pb-12'>
      <div className='container mx-auto px-4'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold mb-4'>
            О компании <span className='text-brand'>HYDRA</span>
          </h1>
          <p className='text-gray-400 text-lg max-w-3xl mx-auto'>
            Мы создаем передовые технологические решения для геймеров и профессионалов, объединяя инновации, качество и
            стиль в каждом продукте.
          </p>
        </div>

        {/* Features */}
        <div className='grid md:grid-cols-3 gap-8 mb-16 text-center'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-gray-900 p-6 rounded-lg border border-green-500/20 hover:border-green-500 transition-all hover:scale-105'
            >
              <feature.icon className='w-12 h-12 text-brand mb-4 mx-auto' />
              <h3 className='text-xl font-bold mb-2 '>{feature.title}</h3>
              <p className='text-gray-400'>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* History */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Наши продукты</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {categories.map((category, index) => (
              <div
                key={index}
                className='bg-gray-900 p-8 rounded-lg border border-green-500/20 text-center group
                  hover:border-green-500 transition-all hover:scale-105'
              >
                <category.icon
                  className='w-16 h-16 text-brand mx-auto mb-6 
                  group-hover:scale-110 transition-transform'
                />
                <h3 className='text-xl font-bold mb-4'>{category.title}</h3>
                <p className='text-gray-400'>{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Zap,
    title: 'Инновации',
    description: 'Постоянное внедрение новейших технологий и решений',
  },
  {
    icon: Shield,
    title: 'Качество',
    description: 'Строгий контроль качества на всех этапах производства',
  },
  {
    icon: Award,
    title: 'Признание',
    description: 'Многочисленные награды и признание экспертов индустрии',
  },
];

const categories = [
  {
    icon: Laptop2,
    title: 'Игровые ноутбуки',
    description: 'Мощные и стильные ноутбуки для максимальной производительности в играх',
  },
  {
    icon: Headphones,
    title: 'Наушники',
    description: 'Профессиональные игровые наушники с передовыми аудиотехнологиями',
  },
  {
    icon: Cpu,
    title: 'Аксессуары',
    description: 'Высококачественные игровые аксессуары для полного погружения',
  },
];
