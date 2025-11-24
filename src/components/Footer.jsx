const Footer = () => {
  return (
    <div className="w-full bg-linear-to-br from-sky-950 via-black to-cyan-950 py-10 sm:px-8 px-5 flex flex-col items-center">
      <div className="flex flex-wrap justify-between items-start gap-5 w-full py-5 border-b border-gray-500">
        <div className="flex flex-col items-start gap-3">
          <h4 className="lg:text-3xl text-2xl font-bold bg-linear-to-br from-purple-600 to-cyan-200 bg-clip-text text-transparent">
            GameHub
          </h4>
          <p className="max-w-xs font-medium text-gray-300">
            GameHub is a community-driven platform for gamers, connecting
            players to buy, sell, and trade games while sharing tips, reviews,
            and experiences. It empowers the gaming community with seamless
            transactions and access to the latest gaming content.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h5 className="font-semibold text-white text-lg">Company</h5>
          <ul className="font-medium text-gray-400 flex flex-col items-start gap-1">
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h5 className="font-semibold text-white text-lg">Information</h5>
          <ul className="font-medium text-gray-400 flex flex-col items-start gap-1">
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Join Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h5 className="font-semibold text-white text-lg">Social</h5>
          <ul className="font-medium text-gray-400 flex flex-col items-start gap-2">
            <li>
              <a
                href="#"
                className="hover:text-white transition duration-300 items-center flex gap-1 group"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition duration-300 items-center flex gap-1 group"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition duration-300 items-center flex gap-1 group"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition duration-300 items-center flex gap-1 group"
              >
                support@gamehub.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="font-medium text-gray-300 text-center mt-5">
        ©gamehub. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
