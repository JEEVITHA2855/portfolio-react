import websiteImg1 from '../assets/ideathon.png';
import websiteImg2 from '../assets/online.png';
import websiteImg3 from '../assets/Azure.jpg';

export default function Achievements() {

    const config = {
        Achievements : [
            {
                image: websiteImg1,
                description: 'FarmGuide: Empowering Agriculture through Personalized Plantation Assistance is an idea presented at Ideathon, focusing on providing tailored support for farmers. It likely includes features such as crop selection guidance, soil analysis, weather predictions, and resource management.',
   
            },
            {
                image: websiteImg2,
                description: 'Online course on Python Programming from UST',
               
            },
            {
                image: websiteImg3,
                description: ' I’ve been sharpening my skills through Microsoft Learn, earning certifications that have given me hands-on expertise in Azure Architecture',
            }
        ]
    }

    return <section id='acievements' className="flex  flex-col py-20 px-5 justify-center bg-primary text-black">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl mb-5 w-[150px] font-bold">Achievements</h1>
                <p> Do check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.Achievements.map((Achievements) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={Achievements.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{Achievements.description}</p>
                            <div className='flex justify-center'>
           
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}