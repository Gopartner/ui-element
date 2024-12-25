import React, { useEffect, useState } from 'react';
import { db } from '@f/firebaseConfig';  // Mengambil konfigurasi Firebase
import LoadingButton from '@c/LoadingButton';  // Mengimpor komponen LoadingButton

const About = () => {
  const [aboutData, setAboutData] = useState({
    merek: "",
    artikel: ""
  });
  const [isLoading, setIsLoading] = useState(true); // State untuk tombol loading

  useEffect(() => {
    // Ambil data dari node 'about'
    const fetchData = async () => {
      try {
        const snapshot = await db.ref('about').once('value'); // Ambil data dari node 'about'
        if (snapshot.exists()) {
          setAboutData(snapshot.val());  // Ambil seluruh data dari node about
        } else {
          console.log("Data not found.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);  // Set loading menjadi false setelah data diambil
      }
    };

    fetchData(); // Panggil fungsi fetchData
  }, []);

  return (
    <section className="bg-gray-100 py-12 mt-16">
      <div className="container mx-auto px-4">
        {/* Jika sedang loading, tampilkan tombol Loading */}
        {isLoading ? (
          <div className="flex justify-center">
            <LoadingButton isLoading={true} text="Loading Data..." />
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center mb-6">
              {aboutData.merek ? aboutData.merek : "No Merek Data"}
            </h2>
            <p className="text-lg leading-relaxed text-center mb-8">
              {aboutData.artikel ? aboutData.artikel : "No Artikel Data"}
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default About;
