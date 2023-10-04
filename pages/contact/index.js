import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import {
    RiYoutubeLine,
    RiFacebookLine,
    RiInstagramLine,
    RiTwitterLine,
    RiLinkedinLine,
    RiRedditLine,
    RiTelegramLine,
    RiMailLine
} from "react-icons/ri";

const Contact = () => {
    return (
        <div className="h-full bg-primary/30">
            <div className='container mx-auto py-32 text-center xl:text-left flex-items-center justify-center h-full'>
                <div className='flex flex-col w-full max-w-[700px]'>
                    <motion.h2
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h2 text-center mb-12'>
                        Let&apos;s <span className='text-accent'>connect.</span>
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href={'https://www.youtube.com/channel/UCFvU1giLa8uejt8HdvjnntQ'} className="text-5xl hover:text-accent transition-all duration-300">
                            <RiYoutubeLine />
                        </a>
                        <a href={'https://www.facebook.com/profile.php?id=100091601081883'} className="text-5xl hover:text-accent transition-all duration-300">
                            <RiFacebookLine />
                        </a>
                        <a href={'https://www.instagram.com/travilabs_/'} className="text-5xl hover:text-accent transition-all duration-300">
                            <RiInstagramLine />
                        </a>
                        <a href={'https://twitter.com/travilabs'} className="text-5xl hover:text-accent transition-all duration-300">
                            <RiTwitterLine />
                        </a>
                        <a href={'https://www.linkedin.com/company/travilabs'} className="text-5xl hover:text-accent transition-all duration-300">
                            <RiLinkedinLine />
                        </a>
                        <a href={'https://www.reddit.com/user/travilabs'} className="text-5xl hover:text-accent transition-all duration-300">
                            <RiRedditLine />
                        </a>
                        <a href={'https://t.me/distGo'} className="text-5xl hover:text-accent transition-all duration-300">
                            <RiTelegramLine />
                        </a>
                        <a href="mailto:office.travilabs@gmail.com" className="text-5xl hover:text-accent transition-all duration-300">
                            <RiMailLine />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
