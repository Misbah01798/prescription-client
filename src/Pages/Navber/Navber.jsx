import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo1.png'

const Navber = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><Link to='/register'>Sign Up</Link></li>
                        {/* <li tabIndex={0}>
                            <details>
                                <summary>Doctors</summary>
                                <ul className="p-2">
                                    <li><a>Dashboard</a></li>
                                    <li><a>Prescription</a></li>
                                    <li><a>Appointments</a></li>
                                    <li><a>Schedule Timings</a></li>
                                    <li><a>My Patients</a></li>
                                    <li><a>Patients Profile</a></li>
                                    <li><a>Message</a></li>
                                    <li><a>Profile Settings</a></li>
                                    <li><a>Blogs</a></li>
                                </ul>
                            </details>
                        </li>
                        <li tabIndex={0}>
                        <details>
                            <summary>Patients</summary>
                            <ul className="p-2">
                                <li><a>Dashboard</a></li>
                                <li><a>Doctors</a></li>
                                <li><a>Search Doctor</a></li>
                                <li><a>Booking</a></li>
                                <li><a>Pharmacy List</a></li>
                                <li><a>Checkout</a></li>
                                <li><a>Test Report</a></li>
                                <li><a>Message</a></li>
                                <li><a>Profile Settings</a></li>
                                <li><a>Change Password</a></li>
                            </ul>
                        </details>
                    </li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Pharmacy</summary>
                                <ul className="p-2">
                                    <li><a>Add Product</a></li>
                                    <li><a>Products</a></li>
                                    <li><a>Cart</a></li>
                                    <li><a>Checkout</a></li>
                                    <li><a>Message</a></li>
                                    <li><a>Profile Settings</a></li>
                                    <li><a>Change Password</a></li>
                                </ul>
                            </details>
                        </li> */}
                    </ul>
                </div>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={logo} />
                    </div>
                </label>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>Home</li>
                    <li><Link to='/register'>Sign Up</Link></li>
                    {/* <li tabIndex={0}>
                        <details>
                            <summary>Doctors</summary>
                            <ul className="p-2">
                                <li><a>Dashboard</a></li>
                                <li><a>Prescription</a></li>
                                <li><a>Appointments</a></li>
                                <li><a>Schedule Timings</a></li>
                                <li><a>My Patients</a></li>
                                <li><a>Patients Profile</a></li>
                                <li><a>Message</a></li>
                                <li><a>Profile Settings</a></li>
                                <li><a>Blogs</a></li>
                            </ul>
                        </details>
                    </li> */}
                    {/* <li tabIndex={0}>
                        <details>
                            <summary>Patients</summary>
                            <ul className="p-2">
                                <li><a>Dashboard</a></li>
                                <li><a>Doctors</a></li>
                                <li><a>Search Doctor</a></li>
                                <li><a>Booking</a></li>
                                <li><a>Pharmacy List</a></li>
                                <li><a>Checkout</a></li>
                                <li><a>Test Report</a></li>
                                <li><a>Message</a></li>
                                <li><a>Profile Settings</a></li>
                                <li><a>Change Password</a></li>
                            </ul>
                        </details>
                    </li> */}
                    {/* <li tabIndex={0}>
                        <details>
                            <summary>Pharmacy</summary>
                            <ul className="p-2">
                                <li><a>Add Product</a></li>
                                <li><a>Products</a></li>
                                <li><a>Cart</a></li>
                                <li><a>Checkout</a></li>
                                <li><a>Message</a></li>
                                <li><a>Profile Settings</a></li>
                                <li><a>Change Password</a></li>
                            </ul>
                        </details>
                    </li> */}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    )
}

export default Navber
