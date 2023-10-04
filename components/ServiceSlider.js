import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'We create software for our customers of the highest quality.',
    link: '/work'
  },
  {
    icon: <RxCrop />,
    title: 'Problem Solving',
    description: 'We want to solve your business problems. Automate processes.',
    link: '/work'
  },
  {
    icon: <RxPencil2 />,
    title: 'Education',
    description: 'A mission is education. We educate on various platforms.',
    link: '/education'
  },
  {
    icon: <RxReader />,
    title: 'Analysis',
    description: 'We analyze data for our clients not only for commercial purposes.',
    link: '/work'
  },
  {
    icon: <RxRocket />,
    title: 'Tokenization',
    description: 'Do you want to stocenize your business? No problem!',
    link: '/work'
  },
];

const ServiceSlider = () => {
  return ( 
    <Swiper 
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {
        serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div 
                onClick={() => window.open(item.link, '_blank')} 
                className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-6 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
              >
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[350px] leading-normal">{item.description}</p>
                </div>
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
                </div>
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
