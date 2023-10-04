
// components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';


const Services = () => {
  return <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        { /* text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 
            variants={fadeIn('up', 0.2)} 
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 xl:mt-8'
          >
            Our services <span className='text-accent'>.</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.4)} 
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mb-4 max-w-[400px] mx-auto lg:mx-0'
            >
              Our company offers various services. We not only develop software and solve problems, but also educate people on various platforms. Do you want to create an online store, a telegram bot? A discord bot? Maybe you want to automate your business? Write to us and arrange an individual meeting online and you will find out what we are able to do for you!
          </motion.p>
        </div>

        { /* slider */}
        <motion.div 
          variants={fadeIn('down', 0.6)} 
          initial='hidden'
          animate='show'
          exit='hidden'
          className='w-full xl:max-w-[65%]'>

          <ServiceSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>;
};

export default Services;
