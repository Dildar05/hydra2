import { Mail, Phone, Clock, HeadphonesIcon, Truck, Award } from 'lucide-react';

export default function Contacts() {
  return (
    <div className='pt-24 pb-12'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold mb-8'>Контакты</h1>

        {/* Working Hours Banner */}
        <div className='bg-customGreen text-black p-6 rounded-lg mb-12 flex items-center justify-center space-x-3'>
          <Clock className='w-6 h-6' />
          <span className='font-semibold'>Работаем для вас ежедневно с 10:00 до 19:00</span>
        </div>

        {/* Support Channels */}
        <div className='mb-16'>
          <h2 className='text-2xl font-bold mb-8'>Способы связи</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className='bg-gray-900 p-8 rounded-lg border border-green-500/20 text-center
                  hover:border-green-500 transition-all group'
              >
                <channel.icon
                  className='w-12 h-12 text-brand mx-auto mb-4 
                  group-hover:scale-110 transition-transform'
                />
                <h3 className='text-xl font-bold mb-2'>{channel.title}</h3>
                <p className='text-gray-400 mb-4'>{channel.description}</p>
                <a href={channel.link} className='text-brand font-semibold hover:text-green-400 transition-colors'>
                  {channel.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Benefits */}
        <div>
          <h2 className='text-2xl font-bold mb-8'>Преимущества работы с нами</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className='bg-gray-900 p-6 rounded-lg border border-green-500/20 
                  flex items-start space-x-4 group hover:border-green-500 transition-all'
              >
                <benefit.icon className='w-10 h- text-brand group-hover:scale-110 transition-transform' />
                <div>
                  <h3 className='text-xl font-bold mb-2'>{benefit.title}</h3>
                  <p className='text-gray-400'>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const supportChannels = [
  {
    icon: HeadphonesIcon,
    title: 'Техническая поддержка',
    description: 'Круглосуточная поддержка по всем вопросам использования нашей продукции',
    link: 'tel:+77004508335',
    linkText: '8 (700) 450-83-35',
  },
  {
    icon: Mail,
    title: 'Email поддержка',
    description: 'Напишите нам, и мы ответим в течение 24 часов',
    link: 'mailto:hydrashop2021@gmail.com',
    linkText: 'hydrashop2021@gmail.com',
  },
  {
    icon: Phone,
    title: 'Отдел продаж',
    description: 'Консультации по выбору продукции и специальным предложениям',
    link: 'tel:+77004508335',
    linkText: '8 (700) 450-83-35',
  },
];

const benefits = [
  {
    icon: Truck,
    title: 'Быстрая доставка',
    description: 'Доставляем заказы по всему Казахстану. ',
  },
  {
    icon: Award,
    title: 'Официальная гарантия',
    description: 'На всю продукцию предоставляется гарантия от нас сроком до 6 месяцев',
  },
];
