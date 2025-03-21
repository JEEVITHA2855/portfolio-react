import ResumeImg from '../assets/resume.jpg';

export default function Resume() {
    const resumeLink = "/resume.pdf"; // Local resume file in public folder

    return (
        <section id="resume" className="flex flex-col md:flex-row bg-secondary px-5 py-10 items-center">
            {/* Left: Resume Image */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
                <img className="w-[300px] rounded-lg shadow-lg" src={ResumeImg} alt="Resume Preview" />
            </div>

            {/* Right: Resume Info */}
            <div className="md:w-1/2 flex justify-center">
                <div className="flex flex-col justify-center text-black text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-8">Resume</h1>  {/* Increased bottom margin for more gap */}
                    <p className="text-lg mb-5">Click to view my resume</p>  {/* Added margin-bottom */}
                    <a
                        className="bg-white text-black px-5 py-2 rounded-lg shadow-md hover:bg-[#a4a48b] transition duration-300"
                        href={resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📄 View Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
