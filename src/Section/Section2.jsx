import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Section2 = () => {
    Aos.init({
        duration: 1000
    })
    return (
        <div className="bg-slate-50 text-center pb-3">
            <p className='text-5xl font-bold py-5'>Our Teachers!</p>
            <p className='px-20 text-xl pb-5'>Our teacher is essential for enhancing the learning experience. It helps teachers understand what's working well and where improvements are needed in their teaching methods, materials, and classroom management. Constructive feedback delivered respectfully and with clarity can be a valuable tool for professional growth.</p>
            <div className='flex  justify-evenly'>
                <div className="w-full lg:w-[24%]">
                    <img data-aos="zoom-out" src="/1.jpg" className="" alt="" />

                    <p className='pt-2'>Jahidul Islam Junayet</p>
                    <p className='py-2'>Information & Technology Department</p>
                    <div className="flex gap-4 justify-center">
                        <AiFillFacebook className='text-4xl'></AiFillFacebook>
                        <AiOutlineTwitter className='text-4xl'></AiOutlineTwitter>
                        <AiFillInstagram className='text-4xl'></AiFillInstagram>
                        <AiOutlineWhatsApp className='text-4xl'></AiOutlineWhatsApp>
                    </div>
                </div>
                <div className="w-full lg:w-[24%]">
                    <img data-aos="zoom-out" src="/2.jpg" className="" alt="" />

                    <p className='pt-2'>Mst Sadia Afrin</p>
                    <p className='py-2'>Computer Engineering Department</p>
                    <div className="flex gap-4 justify-center">
                        <AiFillFacebook className='text-4xl'></AiFillFacebook>
                        <AiOutlineTwitter className='text-4xl'></AiOutlineTwitter>
                        <AiFillInstagram className='text-4xl'></AiFillInstagram>
                        <AiOutlineWhatsApp className='text-4xl'></AiOutlineWhatsApp>
                    </div>
                </div>
                <div className="w-full lg:w-[24%]">
                    <img data-aos="zoom-out" src="/3.jpg" className="" alt="" />

                    <p className='pt-2'>Abdul Ramim Islam</p>
                    <p className='py-2'>Information & Technology Department</p>
                    <div className="flex gap-4 justify-center">
                        <AiFillFacebook className='text-4xl'></AiFillFacebook>
                        <AiOutlineTwitter className='text-4xl'></AiOutlineTwitter>
                        <AiFillInstagram className='text-4xl'></AiFillInstagram>
                        <AiOutlineWhatsApp className='text-4xl'></AiOutlineWhatsApp>
                    </div>
                </div>
                <div className="w-full lg:w-[24%]">
                    <img data-aos="zoom-out" src="/4.jpg" className="" alt="" />

                    <p className='pt-2'>Rajiya Soltana mim</p>
                    <p className='py-2'>Textail Department</p>
                    <div className="flex gap-4 justify-center">
                        <AiFillFacebook className='text-4xl'></AiFillFacebook>
                        <AiOutlineTwitter className='text-4xl'></AiOutlineTwitter>
                        <AiFillInstagram className='text-4xl'></AiFillInstagram>
                        <AiOutlineWhatsApp className='text-4xl'></AiOutlineWhatsApp>
                    </div>
                </div>
            </div>

        </div >


    );
};

export default Section2;