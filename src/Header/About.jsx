
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Section/Footer/Footer';
const About = () => {
    Aos.init({
        duration: 100
    })
    Aos.refresh()
    return (
        <div>
            <div>
                <div className="hero">
                    <div className="hero-content flex-col gap-24 lg:flex-row">
                        <img data-aos="fade-right" src="/job.jpg" className="lg:w-[50%] w-full " />
                        <div data-aos="fade-left" className="w-full lg:w-[50%]">
                            <h1 className="text-4xl font-bold">Career fairs</h1>
                            <p className="py-6 text-[#7E7C87]">Career fairs are events that connect job seekers with potential employers. They can focus on specific industries, job types, locations, education and training, diversity and inclusion, government and military, startup and entrepreneurship, and more. To find career fairs, check university websites, job search platforms, industry associations, networking with professionals, and social media. Be prepared with your resume and elevator pitch when attending career fairs to make a positive impression.</p>
                            <button className="bg-[#0E831E] px-3 py-2 text-black text-xl rounded hover:bg-slate-200">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <p className='text-3xl font-semibold'>Our Global Community</p>
                    <p className='pt-4 pb-6 text-[#7E7C87]'>Join thousand of instructors and earn money hassle free!</p>
                    <div className='flex justify-evenly'>
                        <div className='flex gap-5'>
                            <img src="f3.png" alt="" />
                            <div>
                                <span className='text-bold text-5xl'>27</span>
                                <p className='text-[#7E7C87]'>Million Learners</p>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <img src="f4.png" alt="" />
                            <div>
                                <span className='text-bold text-5xl'>4.6</span>
                                <p className='text-[#7E7C87]'>Million  Graduates</p>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <img src="f5.png" alt="" />
                            <div>
                                <span className='text-bold text-5xl'>1400+</span>
                                <p className='text-[#7E7C87]'>Online Courses</p>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <img src="f7.png" alt="" />
                            <div>
                                <span className='text-bold text-5xl'>175</span>
                                <p className='text-[#7E7C87]'>Countries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;