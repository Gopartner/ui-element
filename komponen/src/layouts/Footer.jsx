import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { db } from '@f/firebaseConfig';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaTwitter, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const socialIconMap = {
  facebook: <FaFacebook size={24} />,
  instagram: <FaInstagram size={24} />,
  tiktok: <FaTiktok size={24} />,
  youtube: <FaYoutube size={24} />,
  twitter: <FaTwitter size={24} />,
  telegram: <FaTelegram size={24} />,
  whatsapp: <FaWhatsapp size={24} />
};

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const footerRef = ref(db, 'footer');

    // Listen to changes in real-time
    const unsubscribe = onValue(footerRef, (snapshot) => {
      if (snapshot.exists()) {
        setFooterData(snapshot.val());
      } else {
        console.log('No data available');
      }
    });

    // Cleanup the listener when component unmounts
    return () => unsubscribe();
  }, []);

  if (!footerData) {
    return <div>Loading...</div>;
  }

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-2">Office Address</h4>
            <p>{footerData.officeAddress}</p>
            <p>Phone: {footerData.phoneNumber}</p>
            <p>WhatsApp: {footerData.whatsapp}</p>
            <p>Email: <a href={`mailto:${footerData.email}`} className="text-blue-400">{footerData.email}</a></p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <ul className="flex space-x-4">
              {/* Ubah socialLinks menjadi array menggunakan Object.entries */}
              {footerData.socialLinks && Object.entries(footerData.socialLinks).map(([name, url], index) => {
                const icon = socialIconMap[name.toLowerCase()];
                return (
                  <li key={index}>
                    <a href={url} className="text-blue-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                      {icon ? icon : name} {/* Jika icon tidak ditemukan, tampilkan nama */}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>


	  <div className="mt-4">
  <h3 className="text-lg font-semibold">Download Links</h3>

  {/* Layout gambar download link */}
  <div className="mt-2 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
    <a href={footerData.downloadLinks.googlePlay} target="_blank" rel="noopener noreferrer">
      <img
        src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f519939e72eccefffb6998f1397901b7.svg"
        alt="Google Play Store"
        className="w-32" // Sesuaikan ukuran gambar
      />
    </a>

    <a href={footerData.downloadLinks.appStore} target="_blank" rel="noopener noreferrer">
      <img
        src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/18339f1ae28fb0c49075916d11b98829.svg"
        alt="App Store"
        className="w-32" // Sesuaikan ukuran gambar
      />
    </a>
  </div>
</div>



        </div>

        <div className="mt-8 text-center">
          <p>{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

