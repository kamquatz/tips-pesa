import Image from "next/image"
import Link from "next/link"

import { footerLinks } from "@/constants"

const Footer = () => {
    return (
        <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
            <div className="flex justify-between items-center flex-wrap gap-5 sm:px-16 px-6 py-10">
                <div className="footer__links">
                    <Link href='/' className='footer__link justify-left'>
                        <Image
                            src='/tipspesa.png'
                            alt='TipsPesa Logo'
                            width={32}
                            height={32}
                            className='object-contain'
                        />Tips Pesa &copy;{new Date().getFullYear()}
                    </Link>
                    {footerLinks.map((link) => (
                        <div key={link.title} className="footer__link">
                            <h3 className="font-bold">{link.title}</h3>
                            {link.links.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className="text-blue-500"
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
                <p>&copy; {new Date().getFullYear()} TipsPesa Systems. All Rights Reserved</p>
                <div className="footer__copyrights-link">
                    <Link
                        href='/'
                        className="text-blue-500"
                    >Privacy Policy
                    </Link>
                    <Link
                        href='/'
                        className="text-blue-500"
                    >Terms of Use
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer