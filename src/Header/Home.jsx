import { useLoaderData } from "react-router-dom";
import Footer from "../Section/Footer/Footer";
import Section1 from "../Section/Section1";
import Section2 from "../Section/Section2";
import Event from "./Event";


const Home = () => {
    const events = useLoaderData()

    console.log(events)
    return (
        <div>
            <div className="carousel w-full max-h-[500px]">
                <div id="item1" className="carousel-item w-full">
                    <img src="/b.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="/bgn1.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="/bg4.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="/bgn2.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
            <Section1></Section1>
            <div>
                <Section2></Section2>
            </div>
            <div className="mt-10">
                <p className="text-4xl text-center font-bold my-10 pb-5">Our Best Services</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        events.map(event => <Event key={event.id} event={event}></Event>)
                    }
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;