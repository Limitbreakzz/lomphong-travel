import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-yellow-600 text-gray-900 py-12 px-4 mt-auto">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* รายละเอียดและ Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold">
              Art and Cultural Tourism 
            </h3><h3 className="text-xl font-bold mb-4">
              เป็นเว็บไซต์รวบรวมข้อมูลสถานที่ท่องเที่ยวเชิงศิลปะและวัฒนธรรม
            </h3>
            <div className="flex space-x-4 mt-2">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-900 hover:text-gray-200 transition-colors">
                <i className="bi bi-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-200 transition-colors ml-4">
                <i className="bi bi-tiktok text-xl"></i>
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-200 transition-colors ml-4">
                <i className="bi bi-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-200 transition-colors ml-4">
                <i className="bi bi-youtube text-xl"></i>
              </a>
            </div>
          </div>

          {/* เมนูลิงก์ */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">หน้าเว็บ</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-200 hover:underline">หน้าแรก</Link>
              </li>
              <li>
                <Link to="/Collection" className="hover:text-gray-200 hover:underline">ที่เที่ยว</Link>
              </li>
              <li>
                <Link to="/Contact" className="hover:text-gray-200 hover:underline">ติดต่อเรา</Link>
              </li>
            </ul>
          </div>

          {/* ช่องทางติดต่ออื่นๆ */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">ช่องทางติดต่ออื่นๆ:</h3>
            <a href="mailto:lomphongsrathongmee@gmail.com" className="hover:text-gray-200 hover:underline flex items-center mb-4">
              <i className="bi bi-envelope-fill mr-2"></i>
              E-mail: lomphongsrathongmee@gmail.com
            </a>
            <p className="text-sm mt-4">
              © ล้อมพงษ์ สระทองมี 68319010009
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;