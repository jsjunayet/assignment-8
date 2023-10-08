import Aos from 'aos';

import 'aos/dist/aos.css';

const Section1 = () => {
    Aos.init({
        duration: 2000
    })
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col gap-24 lg:flex-row">
                    <img data-aos="fade-right" src="/web.jpg" className="lg:w-[50%] w-full " />
                    <div data-aos="fade-left" className="w-full lg:w-[50%]">
                        <h1 className="text-4xl font-bold">Workshops and Webinars</h1>
                        <p className="py-6">Workshops are interactive, hands-on learning sessions, while webinars are online seminars with structured presentations. Workshops encourage active participation and skill-building in smaller groups. Webinars are often one-way presentations to larger audiences, with limited interaction. The choice depends on learning goals and audience size.</p>
                        <button className="bg-[#0E831E] px-3 py-2 text-black text-xl rounded hover:bg-slate-200">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;