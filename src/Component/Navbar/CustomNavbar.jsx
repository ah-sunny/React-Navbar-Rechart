import { useState } from "react";
import { CgCloseR, CgMenu } from "react-icons/cg";
import Link from "./Link";


const CustomNavbar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/services', name: 'Services' }
    ];

    const [open , setOpen] = useState(false)

    return (
        <nav>
            <div className="md:hidden text-3xl w-fit " onClick={()=> setOpen(!open)}>
                {
                    open == false ? 
                    <CgMenu></CgMenu> : <CgCloseR></CgCloseR>
                }
                
            </div>


            <ul className={` absolute duration-1000
            ${open ? 'top-24 ':'-top-60'}
            bg-slate-700 p-3 font-bold rounded-2xl text-white`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>
                       )
                }
            </ul>
            {/* middle point show */}
            <ul className="hidden md:flex justify-center gap-10 text-2xl font-bold">
                {
                    routes.map(item => 
                    <li  
                    key={item.id}>
                        {item.name}
                        </li>)
                }
            </ul>

        </nav>
    );
};

export default CustomNavbar;