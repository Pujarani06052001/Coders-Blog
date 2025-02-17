import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex  items-center cursor-pointer">
                <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSewAGw2HlUf3I-6sTUpRVyOOKu5G6gN3K6og&s"
                    width="60"
                    height="70"
                    alt="Navbar Logo"
                />
                <span className="font-bold ml-2 text-primary item-center">Coder&apos;s Blog</span>
            </div>
            <ul className="flex items-center">
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">Products</a>
                   
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    
                    <a href="#">Pricing</a>
                    

                </li>
                <li className="mr-6 font-medium text-gray-600">
                    
                    <a href="#">Docs</a>
                    
                </li>
                <li className="mr-6 font-medium text-gray-600">
                
                    <a href="#">Company</a>

                </li>
            </ul>

            <ul className="flex items-center">
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#" className="hover:text-gray-400">Log in</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#" className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all ">Sign up</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
