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
              src="https://scontent.fkdt1-1.fna.fbcdn.net/v/t39.30808-6/509942209_122207887190114515_4211105564152320581_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH2_YVKDNXzc3rAoaTS3mcHic9O8BXYZNyJz07wFdhk3Mj_zACJKjbzPKjuxn1Hp7HosTJwLwHzdysWuAUBOx3j&_nc_ohc=eC0iNE8OAKcQ7kNvwHBO31R&_nc_oc=AdkP5Yc81wPjVMbNEIbEqeOckSZO8c56cwFGu8bDGf23VKc7sbCbmFsjFu_uhTPkosAhDu2D2TOIrIWM7lyxMQgY&_nc_zt=23&_nc_ht=scontent.fkdt1-1.fna&_nc_gid=io1qSEnn8a05CRrFZ7LMbA&oh=00_AfXlXAHQKW0MjiutBo_aUwCIcntvbGMBWmXbwONJf7TB1Q&oe=689A610A" // ต้องมีไฟล์รูปภาพนี้ในโฟลเดอร์ public
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