import HeroImg from '../assets/hero.png';
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle: 'Full-stack developer & Designer',
        social: {
            linkedin: 'https://www.linkedin.com/in/jeevitha-s-2362ba292/',
            github: 'https://github.com/JEEVITHA2855'
        }
    }

    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-black text-6xl font-hero-font'>
                    Hi, <br /> I'm <span className='text-black'>Jeevitha</span>
                </h1>
                <p className='text-gray-700 text-xl mt-4'>{config.subtitle}</p> {/* Added this line */}
                <div className='flex py-10'>
                    <a href={config.social.linkedin} className='hover:text-white mr-4'>
                        <AiOutlineLinkedin size={40} />
                    </a>
                    <a href={config.social.github} className='hover:text-white'>
                        <AiOutlineGithub size={40} />
                    </a>
                </div>
            </div>
            <img className='md:w-1/3' src={HeroImg} />
        </section>
    );
}
