import Link from "next/link";

// icons
import { 
  RiYoutubeLine, 
  RiInstagramLine, 
  RiFacebookLine, 
  RiTwitterLine,
  RiLinkedinLine,
  RiRedditLine,
  RiTelegramLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.youtube.com/channel/UCFvU1giLa8uejt8HdvjnntQ'} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100091601081883'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.instagram.com/travilabs_/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://twitter.com/travilabs'} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
      <Link href={'https://www.linkedin.com/company/travilabs'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={'https://www.reddit.com/user/travilabs'} className="hover:text-accent transition-all duration-300">
        <RiRedditLine />
      </Link>
      <Link href={'https://t.me/distGo'} className="hover:text-accent transition-all duration-300">
        <RiTelegramLine />
      </Link>
    </div>
  )
};

export default Socials;
