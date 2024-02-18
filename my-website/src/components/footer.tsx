import FeatherIcon from "feather-icons-react";
import BTNScrollTop from "./button/btn-scrolltop";

export default function Footer() {
    return (
        <footer className="py-10 md:py-16 relative footer">

            <div className="container max-w-screen-xl mx-auto px-4">

                <div className="text-center">
                    <h1 className="font-medium text-4xl md:text-5xl mb-5 text-white">Contact Information</h1>

                    <p className="font-normal text-gray-200 text-md md:text-lg mb-10">Feel free to contact me for any inquiries.</p>

                    <div className="flex items-center justify-center space-x-8">
                        <a 
                            href="https://twitter.com/johnmarcl" 
                            target="_blank" 
                            className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
                        >
                            <i data-feather="twitter" className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500"></i>
                            <FeatherIcon icon="twitter"/>
                        </a>

                        <a  
                            href="https://github.com/johnbatzz" 
                            target="_blank"
                            className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
                        >
                            <FeatherIcon icon="github" />
                        </a>

                        <a  
                            href="https://www.linkedin.com/in/john-batzz-692419108/" 
                            target="_blank" 
                            className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
                        >
                            <FeatherIcon icon="linkedin" />
                        </a>

                        <a 
                            href="mailto:johnmarcl25@gmail.com"
                            target="_blank"
                            className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
                        >
                            <FeatherIcon icon="at-sign" />
                        </a>

                        <a 
                            href="tel:+639399210270" 
                            target="_blank"
                            className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
                        >
                            <FeatherIcon icon="phone" />
                        </a>
                    </div>
                </div>
            </div>
            <BTNScrollTop />
        </footer>
    )
}