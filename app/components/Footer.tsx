const Footer = () => {
  return (
    <footer className="bg-[#010A18] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Demo</h3>
            <p className="text-sm">Innovating through prototyping and 3D printing</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="/" className="hover:text-[#FFE90B] transition-colors duration-300">Home</a></li>
              <li><a href="/projects" className="hover:text-[#FFE90B] transition-colors duration-300">Projects</a></li>
              <li><a href="/order" className="hover:text-[#FFE90B] transition-colors duration-300">Order</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">Email: info@demo.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 Demo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

