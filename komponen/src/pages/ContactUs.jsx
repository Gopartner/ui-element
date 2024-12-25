import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import useDataFetcher from "@h/useDataFetcher"; // Pastikan jalur impor benar
import LoadingSpinner from "@c/LoadingSpinner"; // Pastikan jalur impor benar

const ContactUs = () => {
  const { data, isLoading, errorMessage } = useDataFetcher("footer"); // Menggunakan custom hook

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>; // Menampilkan pesan kesalahan jika ada
  }

  if (!data) {
    return <div>Data tidak ditemukan.</div>; // Menampilkan pesan jika data tidak ada
  }

  return (
    <>
      <div className="container mx-auto p-0">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          {/* Informasi Kontak */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4 dark:text-cyan-100">
              Contact Us
            </h2>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-xl text-blue-500" />
              <p className="dark:text-green-50">{data.email}</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-xl text-green-500" />
              <p className="dark:text-cyan-100">+{data.phoneNumber}</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-xl text-red-500" />
              <p className="dark:text-cyan-100">{data.officeAddress}</p>
            </div>

            {/* Social Media Links */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold dark:text-cyan-100">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href={data.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl text-pink-600" />
                </a>
                <a
                  href={data.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok className="text-2xl text-black" />
                </a>
                <a
                  href={`https://wa.me/${data.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-2xl text-green-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Peta Lokasi */}
          <div className="w-full h-64 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126924.72545783388!2d112.59895640385735!3d-7 .275443363016019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf725fdc4a1%3A0x2c1ebf54b4b7e4eb!2sSurabaya%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1697472223456!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
