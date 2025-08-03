// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

const Home = () => {
  return (
    <>
      <section className="bg-white py-8">
        <div className="container mx-auto px-4 text-left">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">หน้าหลัก</h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />
        </div>
      </section>
      
      {/* ส่วนเนื้อหาหลัก */}
      <section className="bg-white min-h-screen flex flex-col py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* กล่องข้อความด้านซ้าย */}
            <div className="md:w-1/2 w-full p-4">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">สถานที่ท่องเที่ยวเชิงศิลปะและวัฒนธรรม</h2>
              <p className="text-gray-700 leading-relaxed mb-4">"สถานที่ท่องเที่ยวที่เน้นความงามของศิลปะและคุณค่าทางวัฒนธรรมอันเป็นเอกลักษณ์ของแต่ละท้องถิ่น"</p>
              <Link to="Collection" className="px-6 py-3 bg-blue-800 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              สถานที่ท่องเที่ยว
              </Link>
            </div>
            {/* รูปภาพด้านขวา */}
            <div className="md:w-1/2 w-full p-4">
              <img
                src="/picture/ปกหน้าหลัก.png"
                alt="ปกหน้าหลัก"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;