import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  image: string;
  title: string;
}

const carouselItems: CarouselItem[] = [
  {
    image:
      'https://i0.wp.com/afro.com/wp-content/uploads/2025/03/54-scaled.jpg?resize=1200%2C581&ssl=1',
    title:
      'AFRO Flipbook: A look at Baltimore’s 2025 CIAA Men’s and Women’s Basketball Tournament',
  },
  {
    image:
      'https://i0.wp.com/theatlantavoice.com/wp-content/uploads/2025/02/IMG_4832-scaled.jpeg?resize=2000%2C1500&quality=89&ssl=1',
    title:
      'The Lion’s Den: City of Stonecrest opens Dekalb’s first free grocery store inside Martin Luther King Jr. High School',
  },
  {
    image:
      'https://dims.apnews.com/dims4/default/3290b59/2147483647/strip/true/crop/5313x3542+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F78%2F8e%2Faeec68bb9e2dd4820f7f8961f523%2F6963ffee484442aa8a092308e25df317',
    title:
      'Zoe Saldaña wins first Oscar, sweeping awards season as best supporting actress in ‘Emilia Pérez’',
  },
  {
    image:
      'https://i0.wp.com/dallasweekly.com/wp-content/uploads/2025/03/image-5.png?resize=800%2C600&ssl=1',
    title:
      'Texas officials still don’t know how West Texas measles outbreak started',
  },
  {
    image:
      'https://i.cbc.ca/1.7473308.1741024698!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/serena-williams-temp.jpg?im=Resize%3D780',
    title:
      'Tennis legend Serena Williams joins WNBA expansion team Toronto Tempo as part owner',
    description: 'From emotional speeches to subtle reactions',
  },
];

const MainCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative overflow-hidden rounded-lg'>
      <div className='relative h-[370px] bg-black'>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === activeIndex
                ? 'opacity-100'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className='w-full h-full object-cover opacity-80'
            />
            <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent'>
              <h2 className='text-white text-2xl font-bold mb-2'>
                {item.title}
              </h2>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 focus:outline-none transition-colors'
          aria-label='Previous slide'
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 focus:outline-none transition-colors'
          aria-label='Next slide'
        >
          <ChevronRight size={20} />
        </button>

        <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-center space-x-2 z-10'>
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-dot ${
                index === activeIndex ? 'active' : ''
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
