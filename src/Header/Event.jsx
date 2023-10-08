import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Event = ({ event }) => {
    const { id, name, image, price, description } = event
    return (
        <div className="">
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">

                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {name}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {
                            description.length > 105
                                ? <p>{description.slice(0, 104)}.........</p>
                                : <p>{description}....</p>
                        }
                    </p>
                    <a className="inline-block" href="#">
                        <div className='flex gap-10 justify-between items-center'>
                            <Link to={`/Event/${id}`}
                                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Learn More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    ></path>
                                </svg>
                            </Link>
                            <span className='flex gap-1 items-center text-3xl font-semibold'>{price}<FaBangladeshiTakaSign></FaBangladeshiTakaSign></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Event;