import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-white">
        <p className="text-8xl font-bold text-blue-800">404</p>
        <p className="text-2xl text-gray-700 mt-4">Page Not Found</p>
        <p className="text-lg text-gray-600 mt-2">ขออภัย, ไม่พบหน้าที่คุณกำลังมองหา</p>
        <Link to="/" className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          กลับสู่หน้าหลัก
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;