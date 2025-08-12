import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-[#F5F5F5] py-16 flex-grow">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="relative flex justify-center items-center mb-12">
          <hr className="absolute top-1/2 left-0 w-full border-t-2 border-yellow-600" />
          <h1 className="relative z-10 px-6 py-2 text-4xl font-extrabold bg-[#F5F5F5]">
            ติดต่อเรา
          </h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-full w-full object-cover md:w-80"
              src="https://cdn.discordapp.com/attachments/1402999385620611156/1404804333580587099/509942209_122207887190114515_4211105564152320581_n.png?ex=689c857d&is=689b33fd&hm=5138fb8665c898a32102bc63536380e935e17e71bd34a8800a07cae48b713229&"
              alt="สำนักงานใหญ่"
            />
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              สำนักงานใหญ่ 713
            </h2>
            <p className="text-gray-900 text-lg mb-2">
              เวลาทำการ: <span className="font-semibold">วันจันทร์ - ศุกร์ เวลา 8.00 - 17.00 น.</span> (ปิดทำการวันหยุดราชการ)
            </p>

            <ul className="space-y-4 text-gray-700 mt-6">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-xl text-gray-900 mt-1 mr-3" />
                <span>
                  90 ถนน เทศา ตำบลพระปฐมเจดีย์ อำเภอเมืองนครปฐม นครปฐม 73000
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-xl text-gray-900 mr-3" />
                <span>(66)71-300000</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-xl text-gray-900 mr-3" />
                <span>713@nc.ac.th</span>
              </li>
            </ul>

            <a
              href="https://maps.app.goo.gl/ATtLiDmcPN5E8WmA7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-lg shadow-md hover:bg-yellow-700 transition-colors"
            >
              ดูแผนที่
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;