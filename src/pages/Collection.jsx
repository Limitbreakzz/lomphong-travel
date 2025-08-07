import React, { useState } from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar'; 
import allCardData from '../service/allCardData'; 

const Collection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  {/* ฟังก์ชันจัดการการเปลี่ยนแปลงของช่องค้นหา */}
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  {/* กรองข้อมูลจากทั้งหมดเมื่อมีการค้นหา */}
  const filteredData = allCardData.filter(card =>
    (card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
     card.province.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const cardDataBangkok = allCardData.filter(card => card.location === 'bangkok');
  const cardDataChiangMai = allCardData.filter(card => card.location === 'chiangmai');
  const cardDataAyutthaya = allCardData.filter(card => card.location === 'ayutthaya');
  const cardDataPhuket = allCardData.filter(card => card.location === 'phuket');

  return (
    <>
      <div className="container mx-auto p-4 ">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
          <span className="text-gray-900">อยาก</span>
          <span className="text-yellow-700">ไปที่ไหน?</span>
        </h2>
        {/* SearchBar */}
        <SearchBar
          placeholder="ค้นหาชื่อ, รายละเอียด, หรือจังหวัด"
          onSearchChange={handleSearchChange}
        />
        
        {searchTerm ? (
          // แสดงผลลัพธ์การค้นหา 
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">ผลการค้นหา</h2>
            <hr className="border-t-4 border-gray-300 mb-8 w-full" />
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
              {filteredData.length > 0 ? (
                <CardList cardData={filteredData} />
              ) : (
                <p className="col-span-full text-center text-gray-800 text-lg">ไม่พบข้อมูลที่ค้นหา</p>
              )}
            </div>
          </>
        ) : (
          <>
            {/* ส่วนกรุงเทพฯ */}
            <section className="py-8">
              <main className="container mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">กรุงเทพ (Bangkok)</h1>
                <hr className="border-t-4 border-gray-300 mb-8 w-full" />
                <CardList cardData={cardDataBangkok} /> 
              </main>
            </section>

            {/* ส่วนเชียงใหม่ */}
            <section className="py-8">
              <main className="container mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">เชียงใหม่ (Chiang Mai)</h1>
                <hr className="border-t-4 border-gray-300 mb-8 w-full" />
                <CardList cardData={cardDataChiangMai} /> 
              </main>
            </section>
            
            {/* อยุธยา */}
            <section className="py-8">
              <main className="container mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">อยุธยา (Ayutthaya)</h1>
                <hr className="border-t-4 border-gray-300 mb-8 w-full" />
                <CardList cardData={cardDataAyutthaya} /> 
              </main>
            </section>
            
            {/* ภูเก็ต */}
            <section className="py-8 min-h-screen flex flex-col">
              <main className="container mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">ภูเก็ต (Phuket)</h1>
                <hr className="border-t-4 border-gray-300 mb-8 w-full" />
                <CardList cardData={cardDataPhuket} /> 
              </main>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default Collection;