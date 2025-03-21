import AboutImg from '../assets/about.png';

export default function About() {
    const config = {
        line1: 'Hey there! I’m Jeevitha, an AIDS student and a passionate full-stack developer who loves building innovative web applications. Technology excites me, and I’m always exploring new trends in DevOps, cloud deployments, and CI/CD to enhance my skills.',
        line2: 'Beyond coding, I’m an avid photographer, a travel enthusiast, and a lifelong learner. I enjoy capturing moments, discovering new places, and diving into new technologies.',
        line3: 'Excited to create, learn, and explore—one project and one adventure at a time!'
    };

    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
            <div className='py-5 md:w-1/2'>
                <img src={AboutImg} alt="About section image" />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-black'>
                    <h1 className='text-4xl mb-5 w-[170px] font-bold'>About Me</h1>
                    <p className='pb-5'>{config.line1}</p>
                    <p className='pb-5'>{config.line2}</p>
                    <p className='pb-5'>{config.line3}</p>
                </div>
            </div>
        </section>
    );
}
