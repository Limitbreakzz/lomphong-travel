import React from 'react'
import Footer from '../components/footer'

const About = () => {
  return (
    <>
      <div className="bg-white min-h-screen flex flex-col">
        <main className="container mx-auto px-4 py-8 flex-grow">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">ติดต่อ</h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />

          <div className="text-lg text-gray-700 space-y-3">
            <p className="font-semibold text-xl text-blue-800">Art and Cultural Tourism</p>
            <p>Address: 90 Tesa Rd., Mueang, Nakhon Pathom, 73000</p>
            <p>Tel: 032-252790</p>
            <p>E-mail: admin@ArtandCulturalTourism.com</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default About
