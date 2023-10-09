import Layout from "../Layout/Layout";


const Error = () => {
    return (
        <div>
            <Layout></Layout>
            <div className="flex justify-center items-center h-screen">
                <div className="">
                    <p className="text-3xl font-semibold">Opps there is no path file...</p>
                    <img src="/error.jpg" alt="" className="h-full lg:h-96" />
                </div>

            </div>
        </div>
    );
};

export default Error;