import Footer from "../Section/Footer/Footer";
import { BiLocationPlus, BiPhoneCall, BiSolidInstitution } from 'react-icons/bi'


const Location = () => {
    return (
        <div>
            <p className="text-5xl text-center font-bold mt-5">Institute Location</p>
            <div className="flex gap-10 justify-around items-center">
                <div className="px-10">
                    <div className="flex gap-1 items-center ">
                        <BiSolidInstitution className="text-5xl"></BiSolidInstitution>
                        <p className="text-2xl font-semibold">Nation Institute of Textail Engineering & Reseach</p>
                    </div>
                    <div className="flex gap-1 items-center py-3">
                        <BiLocationPlus className="text-5xl"></BiLocationPlus>
                        <p className="text-xl font-semibold">Kohinoor gate, Dhaka - Aricha Hwy, Dhaka</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <BiPhoneCall className="text-5xl"></BiPhoneCall>
                        <p className="text-xl font-semibold">+008 01640011818</p>
                    </div>
                </div>
                <div className="realtive text-right w-[500px] h-[400px] mt-10 "><div className=" overflow-hidden w-[500px] h-[400px]"><iframe className="h-[400px]" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=niter&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://connectionsgame.org/">Connections Unlimited</a></div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Location;