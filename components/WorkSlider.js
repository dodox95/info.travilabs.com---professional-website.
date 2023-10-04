// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/xd.jpg',
          url: 'https://www.arbmidasnft.com',
          hoverText: 'NFT landing',
        },
        {
          title: 'title',
          path: '/cashify.jpg',
          url: 'https://www.cashify.gold',
          hoverText: 'E-commerce shop',
        },
        {
          title: 'title',
          path: '/w2.jpg',
          url: 'https://www.travilabs.com',
          hoverText: 'Bussiness page',
        },
        {
          title: 'title',
          path: '/dom.jpg',
          url: 'https://domestico.pl',
          hoverText: 'E-commerce shop',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/50.jpg',
          url: 'https://mysolary.pl',
          hoverText: 'Solar Panels',
        },
        {
          title: 'title',
          path: '/bard.jpg',
          url: 'https://bardweb3.org/',
          hoverText: 'Crypto project',
        },
        {
          title: 'title',
          path: '/efwgfwe.jpg',
          url: 'https://linguasync.io/',
          hoverText: 'Crypto project',
        },
        {
          title: 'title',
          path: '/tokenstalker.jpg',
          url: 'https://t.me/tokenstalker',
          hoverText: 'Telegram Bot',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/youube.jpg',
          url: 'https://www.youtube.com/@travilabs',
          hoverText: 'YouTube Channel',
        },
        {
          title: 'title',
          path: '/dasxax.jpg',
          url: 'https://medium.com/@office.travilabs',
          hoverText: 'Medium Articles',
        },
        {
          title: 'title',
          path: '/binance.jpg',
          url: '/url1',
          hoverText: 'Binance Automate',
        },
        {
          title: 'title',
          path: '/bardcjd.jpg',
          url: 'https://t.me/BardWeb3_Bot',
          hoverText: 'Telegram Bot',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

const WorkSlider = () => {
  return ( 
    <Swiper 
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, indexSlide) => {
        return (
          <SwiperSlide key={indexSlide}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, indexImage) => {
                return (
                  <a href={image.url} className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={indexImage}>
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      <Image src={image.path} width={500} height={300} alt='' />
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          <div className='delay-100'>{image.hoverText.split(' ')[0]}</div>
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>{image.hoverText.split(' ')[1]}</div>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
