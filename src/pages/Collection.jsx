import React from 'react';
import CardList from '../components/CardList';
import allCardData from '../service/allCardData'; 
import Footer from '../components/footer';

const Collection = () => {
  const cardDataBangkok = allCardData.filter(card => card.location === 'bangkok');
  const cardDataChiangMai = allCardData.filter(card => card.location === 'chiangmai');
  const cardDataAyutthaya = allCardData.filter(card => card.location === 'ayutthaya');
  const cardDataPhuket = allCardData.filter(card => card.location === 'phuket');

  return (
    <>
      {/* ส่วนกรุงเทพฯ */}
      <section className="bg-white py-8 ">
        <main className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">กรุงเทพ (Bangkok)</h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />
          <CardList cardData={cardDataBangkok} /> 
        </main>
      </section>

      {/* ส่วนเชียงใหม่ */}
      <section className="bg-white py-8">
        <main className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">เชียงใหม่ (Chiang Mai)</h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />
          <CardList cardData={cardDataChiangMai} /> 
        </main>
      </section>
      
      {/* อยุธยา */}
      <section className="bg-white py-8">
        <main className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">อยุธยา (Ayutthaya)</h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />
          <CardList cardData={cardDataAyutthaya} /> 
        </main>
      </section>
      
      {/* เชียงใหม่ */}
      <section className="bg-white py-8 min-h-screen flex flex-col">
        <main className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">เชียงใหม่ (Chiang Mai)</h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />
          <CardList cardData={cardDataPhuket} /> 
        </main>
      </section>
      <Footer />
    </>
  );
};

export default Collection;