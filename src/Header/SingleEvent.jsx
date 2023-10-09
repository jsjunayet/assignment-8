import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Section/Footer/Footer";

const SingleEvent = () => {
    const [event, setevent] = useState([])
    const { id } = useParams();
    const events = useLoaderData();
    useEffect(() => {
        const event = events.find(find => find.id == id)
        setevent(event)
    }, [id, events])

    return (
        <div>
            <div className="hero h-screen" style={{ backgroundImage: `url(${event.image})` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold pt-20">{event.name}</h1>
                        <p className="px-5 lg:px-20 mb-5">{event.description}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SingleEvent;