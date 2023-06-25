import Image from "next/image"
import Link from "next/link"

import { footerLinks } from "@/constants"

const Footer = () => {
    return (
        <footer className="w-full flex flex-col text-black-100 mt-5 border-t border-gray-100">
            <div className="w-full flex justify-between items-center flex-wrap gap-5 sm:px-16 px-6 py-10">
                <div className="w-full footer__links">
                    <Link href='/' className='footer__link justify-left'>
                        <Image
                            src='/tipspesa.png'
                            alt='TipsPesa Logo'
                            width={32}
                            height={32}
                            className='object-contain'
                        />
                        <p className="text-xs">
                            Tips Pesa Systems &copy;{new Date().getFullYear()} <br />
                            4th Flr Madonna House <br />
                            Westlands, Nairobi
                        </p>
                    </Link>
                    {footerLinks.map((link) => (
                        <div key={link.title} className="footer__link">
                            <h3 className="font-bold">{link.title}</h3>
                            {link.links.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className="text-blue-500 text-xs"
                                    target="_blank"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center flex-wrap mt-5 border-t border-gray-100 sm:px px-6 py-10" >
                <p className="text-xs">&copy; {new Date().getFullYear()} TipsPesa Systems. All Rights Reserved</p>
                <div className="footer__copyrights-link">
                    <Link
                        href='/'
                        className="text-blue-500 text-xs"
                    >Privacy Policy
                    </Link>
                    <Link
                        href='/'
                        className="text-blue-500 text-xs"
                    >Terms of Use
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer