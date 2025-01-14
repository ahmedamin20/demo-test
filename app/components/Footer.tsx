import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#010A18] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Demo</h3>
            <p className="text-sm">
              Innovating through prototyping and 3D printing
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-[#FFE90B] transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="hover:text-[#FFE90B] transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/order"
                  className="hover:text-[#FFE90B] transition-colors duration-300"
                >
                  Order
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full flex gap-[20px] flex-col md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <Link
              href={"mailto:info@demo-prototyping.com"}
              target="_blank"
              className="text-sm"
            >
              info@demo-prototyping.com
            </Link>
            <Link
              href={"tel:+(20) 01008993933"}
              target="_blank"
              className="text-sm"
            >
              Phone: 01008993933
            </Link>
           <div className="flex flex-row mt-2 justify-evenly w-fit gap-[30px] items-center">
           <Link
              href={"https://wa.me/message/5BC6TEWRNIUQD1"}
              target="_blank"
              className="text-sm hover:text-demo-yellow transition-all duration-[0.5s]"
            >
              <FaWhatsapp size={20} />
            </Link>
           <Link
              href={"https://facebook.com"}
              target="_blank"
              className="text-sm hover:text-demo-yellow transition-all duration-[0.5s]"
            >
              <FaFacebook size={20} />
            </Link>
           <Link
              href={"https://instagram.com"}
              target="_blank"
              className="text-sm hover:text-demo-yellow transition-all duration-[0.5s]"
            >
              <FaInstagram size={20} />
            </Link>
           </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 Demo. All rights reserved.</p>
          <p>&copy; Developed by: <Link className="hover:translate-y-2 hover:text-demo-yellow hover:font-bold hover:shadow-lg transition-all duration-[.5s]" target={"_blank"} href={"https:ahmedamin.tech"}>Ahmed Amin</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
