import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { authContext } from "../Auth/AuthControl";
import swal from "sweetalert";



const Layout = () => {
    const { user, logout } = useContext(authContext);
    const logouthandle = () => {
        logout()
            .then(result => {
                swal("Congress!", "You Logout succesfull!", "success");

            })
            .catch(error => {
                swal("Error!", `${error.message}`, "error");
            })
    }

    console.log(user);
    return (
        <div className="container mx-auto">
            <div>
                <div className=" navbar bg-slate-200">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-0 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <div className="flex flex-col gap-3 justify-center items-center text-2xl">
                                    <NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "bg-cyan-500 rounded py-2 px-3" : ""
                                        }
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/resis"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "bg-cyan-500 rounded py-2 px-3" : ""
                                        }
                                    >
                                        Contract
                                    </NavLink>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "bg-cyan-500 rounded py-2 px-3" : ""
                                        }
                                    >
                                        about
                                    </NavLink>
                                    {/* <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "bg-cyan-500 rounded py-2 px-3" : ""
                                        }
                                    >
                                        Login
                                    </NavLink> */}
                                    <NavLink
                                        to="/signup"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "bg-cyan-500 rounded py-2 px-3" : ""
                                        }
                                    >
                                        Signup
                                    </NavLink>
                                </div>
                            </ul>
                        </div>
                        <div>
                            <img src="/niter.png" className="w-40 object-fill" alt="" />
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <div className="flex  gap-5 justify-center items-center text-2xl">
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "border-[#0E831E] text-[#0E831E] border-b-4 pt-1" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/resis"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "border-[#0E831E] text-[#0E831E] border-b-4 pt-1" : ""
                                    }
                                >
                                    Contract
                                </NavLink>

                                <NavLink
                                    to="/about"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "border-[#0E831E] text-[#0E831E] border-b-4 pt-1" : ""
                                    }
                                >
                                    About
                                </NavLink>
                                {/* <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "border-[#0E831E] text-[#0E831E] border-b-4 pt-1" : ""
                                    }
                                >
                                    Login
                                </NavLink> */}
                                <NavLink
                                    to="/signup"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "border-[#0E831E] text-[#0E831E] border-b-4 pt-1" : ""
                                    }
                                >
                                    Signup
                                </NavLink>
                            </div>
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-5 items-center ">
                        <div className="avatar">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="/p.jpg" />
                            </div>
                        </div>
                        {
                            user ? <Link onClick={logouthandle} className="text-2xl font-bold hover:text-[#0E831E]">LogOut</Link>
                                : <Link to={'/login'} className="text-2xl font-bold hover:text-[#0E831E]">Login</Link>


                        }
                    </div>
                </div>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Layout;