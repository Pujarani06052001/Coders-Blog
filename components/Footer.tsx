import Image from "next/image";
import { Share2 } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white w-full border-t bg-white w-full border-t fixed bottom-0 left-0">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex items-center">
                    <a className="flex items-center text-gray-900">
                        <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSewAGw2HlUf3I-6sTUpRVyOOKu5G6gN3K6og&s"
                            width={60}
                            height={70}
                            alt="Footer Logo"
                        />
                        <span className="ml-3 text-md font-semibold">
                            Coder&apos;s Blog <span className="text-gray-500 text-sm"> |  @2025 coder's blog</span>
                        </span>
                    </a>
                </div>

                <div className="flex space-x-4">
                    <a href="#" aria-label="Instagram">
                        <svg className="w-6 h-6 text-gray-600 hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.5 2h9a5.5 5.5 0 015.5 5.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm9 1.5h-9A4 4 0 003.5 7.5v9A4 4 0 007.5 20.5h9A4 4 0 0020.5 16.5v-9A4 4 0 0016.5 3.5zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6zm4.5-2.25a.75.75 0 110 1.5.75.75 0 010-1.5z" />
                        </svg>
                    </a>

                    <a href="#" aria-label="Twitter">
                        <svg className="w-6 h-6 text-gray-600 hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8.29 20.25l-2.6 1.25L20.25 4.29V3.5H19l-7 7-6-6H3.5v1.5l6 6-7 7v1.5h1.5l7-7 6 6h1.5v-1.5l-6-6 7-7V3.5h-1.5l-7 7-6-6H3.5v1.5l6 6-6 6v1.5h1.5l6-6z" />
                        </svg>
                    </a>

                    <a href="#" aria-label="Facebook">
                        <svg className="w-6 h-6 text-gray-600 hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22 12a10 10 0 10-11.5 9.9v-7H7v-3h3.5V9a4 4 0 014.2-4.3c1.2 0 2.5.2 2.5.2v2.8H15c-1.4 0-1.8.9-1.8 1.8v2h3.2l-.5 3h-2.7v7A10 10 0 0022 12z" />
                        </svg>
                    </a>

                    <a href="#" aria-label="Share">
                        <Share2 className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
