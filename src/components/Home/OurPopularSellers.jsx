"use client";

import Marquee from "react-fast-marquee";
import Gs1 from "@/images/g1.jpeg";
import Gs2 from "@/images/g2.jpeg";
import Gs3 from "@/images/g3.jpg";
import Gs4 from "@/images/g4.jpeg";
import Gs5 from "@/images/g5.jpeg";
import Gs6 from "@/images/g6.jpeg";
import Gs7 from "@/images/g7.jpeg";
import Image from "next/image";

const OurPopularSellers = () => {
  return (
    <section className="w-full py-16 bg-linear-to-b from-purple-200 via-white to-sky-200">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
        Trusted Game Partners
      </h2>
      <p className="text-center text-gray-600 mt-3 mb-12 text-base sm:text-lg max-w-2xl mx-auto">
        Working with leading studios and global creators powering GameHub.
      </p>

      <div className="mt-5 md:w-5/6 w-full mx-auto bg-white border-b-2 border-gray-100 shadow-lg shadow-gray-400 p-1 rounded-lg sm:h-44 h-28 flex flex-col justify-center">
        <Marquee gradient speed={80} gradientWidth={50} pauseOnHover>
          <Image
            src={Gs1}
            alt="image"
            className="sm:h-32 h-24 w-fit object-contain ml-10 border shadow-lg shadow-gray-400"
          />
          <Image
            src={Gs2}
            alt="image"
            className="sm:h-32 h-24 w-fit object-contain ml-10 border shadow-lg shadow-gray-400"
          />
          <Image
            src={Gs3}
            alt="image"
            className="sm:h-32 h-24 w-fit object-contain ml-10 border shadow-lg shadow-gray-400"
          />
          <Image
            src={Gs4}
            alt="image"
            className="sm:h-32 h-24 w-fit object-contain ml-10 border shadow-lg shadow-gray-400"
          />
          <Image
            src={Gs5}
            alt="image"
            className="sm:h-32 h-24 w-fit object-contain ml-10 border shadow-lg shadow-gray-400"
          />
          <Image
            src={Gs6}
            alt="image"
            className="sm:h-32 h-24 w-fit object-contain ml-10 border shadow-lg shadow-gray-400"
          />
          <Image
            src={Gs7}
            alt="image"
            className="sm:h-32 h-24 w-fit object-contain ml-10 border shadow-lg shadow-gray-400"
          />
        </Marquee>
      </div>
    </section>
  );
};

export default OurPopularSellers;
