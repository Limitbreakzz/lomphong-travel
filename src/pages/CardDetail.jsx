import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import allCardData from '../service/allCardData'; 

const CardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const card = allCardData.find((item) => item.id === parseInt(id));

  if (!card) {
    return <Navigate to="*" />;
  }

  return (
    <>
      <main className='flex-grow min-h-screen bg-[#F5F5F5]'>
        <div className='container mx-auto py-10 px-4'>
          <div className='md:flex md:flex-row rounded-lg shadow-lg overflow-hidden'>
            <div className='w-full md:w-1/2 h-120'>
              <img src={card.imageUrl} alt={card.title} />
            </div>
            <div className='md:w-1/2 w-full p-6 flex flex-col'>
              <h1 className='text-4xl font-bold text-gray-900 mb-4'>{card.title}</h1>
              <p className='text-gray-700 text-2xl leading-relaxed'>{card.history}</p>
            </div>
          </div>
          <button
            onClick={() => navigate(-1)}
            className='mt-8 px-6 py-3 bg-yellow-600 font-bold text-gray-900 rounded-lg shadow-md hover:bg-yellow-700 transition duration-300'>
            ย้อนกลับ
          </button>
        </div>
      </main>
    </>
  );
};

export default CardDetail;