import { useState } from "react"
import bg from "../../assets/image/loginbg.jpeg"
import Navber from "../Navber/Navber";


const RagistrationForm = () => {
    const [selectRole, setSelectRole] =useState(null);
    const handleSelectRole =(role)=>{
        setSelectRole(role);
    }
    return (
        <div >
            <Navber></Navber>

            <div className="hero min-h-screen " style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
        }}>
                <div className="hero-content flex-col lg:flex-row space-x-14 ">
                    <div className="text-center lg:text-left">

                        <img src='' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-30">
                        <h1 className="text-5xl font-bold text-center mt-4">Sign Up!</h1>
                        <div className="flex justify-between text-2xl font-bold m-4">
                            <button onClick={()=>handleSelectRole('doctor')} className="btn bg-orange-600 text-white">Doctor</button>
                            <button onClick={()=>handleSelectRole('assistance')} className="btn bg-orange-600 text-white">Assistance</button>
                        </div>
                        {
                            selectRole ==='doctor'&&(
                                <form className="card-body">
                                    <h1 className="text-xl font-bold text-center">Doctor Registration Form</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Position</span>
                                    </label>
                                    <input type="text" name="position" placeholder="Your Position" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-orange-600 text-white">Sign up</button>
                                </div>
                                <div className="items-center">
                                    <h3 className="text-center">Or Sign Up With</h3>
                                    <div className="flex justify-evenly items-center">
                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                            <path d="M17.3047 27.1211V16.5346H20.8761L21.407 12.3896H17.3047V9.74947C17.3047 8.55339 17.6379 7.73447 19.3545 7.73447H21.5297V4.03902C20.4714 3.9256 19.4076 3.87083 18.3432 3.87497C15.1863 3.87497 13.0189 5.80214 13.0189 9.34002V12.3819H9.4707V16.5268H13.0267V27.1211H17.3047Z" fill="#3B5998" />
                                        </svg></a>
                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 25 25" fill="none">
                                            <path d="M5.48292 7.697C6.69132 7.697 7.67092 6.7174 7.67092 5.509C7.67092 4.3006 6.69132 3.321 5.48292 3.321C4.27452 3.321 3.29492 4.3006 3.29492 5.509C3.29492 6.7174 4.27452 7.697 5.48292 7.697Z" fill="#0A66C2" />
                                            <path d="M9.73722 9.355V21.494H13.5062V15.491C13.5062 13.907 13.8042 12.373 15.7682 12.373C17.7052 12.373 17.7292 14.184 17.7292 15.591V21.495H21.5002V14.838C21.5002 11.568 20.7962 9.055 16.9742 9.055C15.1392 9.055 13.9092 10.062 13.4062 11.015H13.3552V9.355H9.73722ZM3.59521 9.355H7.37021V21.494H3.59521V9.355Z" fill="#0A66C2" />
                                        </svg></a>
                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 20 20" fill="none">
                                            <g clip-path="url(#clip0_351_751)">
                                                <path d="M4.6875 10.0001C4.6875 9.00919 4.96051 8.08095 5.4348 7.28615V3.91474H2.0634C0.725313 5.65255 0 7.77048 0 10.0001C0 12.2297 0.725313 14.3476 2.0634 16.0854H5.4348V12.714C4.96051 11.9192 4.6875 10.991 4.6875 10.0001Z" fill="#FBBD00" />
                                                <path d="M10 15.3126L7.65625 17.6564L10 20.0001C12.2296 20.0001 14.3475 19.2748 16.0854 17.9367V14.5689H12.7175C11.9158 15.0449 10.9836 15.3126 10 15.3126Z" fill="#0F9D58" />
                                                <path d="M5.43488 12.7139L2.06348 16.0854C2.3284 16.4294 2.61688 16.7589 2.92902 17.0711C4.81777 18.9598 7.32898 20 10.0001 20V15.3125C8.06164 15.3125 6.3627 14.2687 5.43488 12.7139Z" fill="#31AA52" />
                                                <path d="M20 10.0001C20 9.39169 19.9449 8.78216 19.8363 8.18849L19.7483 7.70806H10V12.3956H14.7442C14.2835 13.312 13.5752 14.0597 12.7175 14.5689L16.0853 17.9367C16.4294 17.6718 16.7589 17.3833 17.0711 17.0712C18.9598 15.1824 20 12.6712 20 10.0001Z" fill="#3C79E6" />
                                                <path d="M13.7565 6.24354L14.1708 6.65783L17.4854 3.3433L17.0711 2.92901C15.1823 1.04026 12.6711 6.10352e-05 10 6.10352e-05L7.65625 2.34381L10 4.68756C11.419 4.68756 12.7531 5.24014 13.7565 6.24354Z" fill="#CF2D48" />
                                                <path d="M10.0001 4.68756V6.10352e-05C7.32902 6.10352e-05 4.81781 1.04026 2.92902 2.92897C2.61688 3.24112 2.3284 3.57061 2.06348 3.91471L5.43488 7.28612C6.36273 5.73131 8.06168 4.68756 10.0001 4.68756Z" fill="#EB4132" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_351_751">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg></a>
    
                                    </div>
                                </div>
                            </form>
    
                            )

                        }
                        {
                            selectRole ==='assistance'&&(
                                <form className="card-body">
                                    <h1 className="text-xl font-bold text-center">Assistance Registration Form</h1>
                                <div className="form-control">
                                    
    
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    
    
                                    <label className="label">
                                        <span className="label-text">Position</span>
                                    </label>
                                    <input type="text" name="position" placeholder="Position" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-orange-600 text-white">Sign up</button>
                                </div>
                                <div className="items-center">
                                    <h3 className="text-center">Or Sign Up With</h3>
                                    <div className="flex justify-evenly items-center">
                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                            <path d="M17.3047 27.1211V16.5346H20.8761L21.407 12.3896H17.3047V9.74947C17.3047 8.55339 17.6379 7.73447 19.3545 7.73447H21.5297V4.03902C20.4714 3.9256 19.4076 3.87083 18.3432 3.87497C15.1863 3.87497 13.0189 5.80214 13.0189 9.34002V12.3819H9.4707V16.5268H13.0267V27.1211H17.3047Z" fill="#3B5998" />
                                        </svg></a>
                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 25 25" fill="none">
                                            <path d="M5.48292 7.697C6.69132 7.697 7.67092 6.7174 7.67092 5.509C7.67092 4.3006 6.69132 3.321 5.48292 3.321C4.27452 3.321 3.29492 4.3006 3.29492 5.509C3.29492 6.7174 4.27452 7.697 5.48292 7.697Z" fill="#0A66C2" />
                                            <path d="M9.73722 9.355V21.494H13.5062V15.491C13.5062 13.907 13.8042 12.373 15.7682 12.373C17.7052 12.373 17.7292 14.184 17.7292 15.591V21.495H21.5002V14.838C21.5002 11.568 20.7962 9.055 16.9742 9.055C15.1392 9.055 13.9092 10.062 13.4062 11.015H13.3552V9.355H9.73722ZM3.59521 9.355H7.37021V21.494H3.59521V9.355Z" fill="#0A66C2" />
                                        </svg></a>
                                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 20 20" fill="none">
                                            <g clip-path="url(#clip0_351_751)">
                                                <path d="M4.6875 10.0001C4.6875 9.00919 4.96051 8.08095 5.4348 7.28615V3.91474H2.0634C0.725313 5.65255 0 7.77048 0 10.0001C0 12.2297 0.725313 14.3476 2.0634 16.0854H5.4348V12.714C4.96051 11.9192 4.6875 10.991 4.6875 10.0001Z" fill="#FBBD00" />
                                                <path d="M10 15.3126L7.65625 17.6564L10 20.0001C12.2296 20.0001 14.3475 19.2748 16.0854 17.9367V14.5689H12.7175C11.9158 15.0449 10.9836 15.3126 10 15.3126Z" fill="#0F9D58" />
                                                <path d="M5.43488 12.7139L2.06348 16.0854C2.3284 16.4294 2.61688 16.7589 2.92902 17.0711C4.81777 18.9598 7.32898 20 10.0001 20V15.3125C8.06164 15.3125 6.3627 14.2687 5.43488 12.7139Z" fill="#31AA52" />
                                                <path d="M20 10.0001C20 9.39169 19.9449 8.78216 19.8363 8.18849L19.7483 7.70806H10V12.3956H14.7442C14.2835 13.312 13.5752 14.0597 12.7175 14.5689L16.0853 17.9367C16.4294 17.6718 16.7589 17.3833 17.0711 17.0712C18.9598 15.1824 20 12.6712 20 10.0001Z" fill="#3C79E6" />
                                                <path d="M13.7565 6.24354L14.1708 6.65783L17.4854 3.3433L17.0711 2.92901C15.1823 1.04026 12.6711 6.10352e-05 10 6.10352e-05L7.65625 2.34381L10 4.68756C11.419 4.68756 12.7531 5.24014 13.7565 6.24354Z" fill="#CF2D48" />
                                                <path d="M10.0001 4.68756V6.10352e-05C7.32902 6.10352e-05 4.81781 1.04026 2.92902 2.92897C2.61688 3.24112 2.3284 3.57061 2.06348 3.91471L5.43488 7.28612C6.36273 5.73131 8.06168 4.68756 10.0001 4.68756Z" fill="#EB4132" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_351_751">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg></a>
    
                                    </div>
                                </div>
                            </form>
    
                            )

                        }
                                               {/* <h1 className="text-center text-2xl font-bold mb-4">Have an account? <Link to='' className="text-3xl text-red-500">Login</Link></h1> */}
                </div>
                </div>
            </div>

        </div>
    )
}

export default RagistrationForm
