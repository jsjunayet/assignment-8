import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Auth/AuthControl";


const Private1 = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default Private1;