// src/hooks/useDataFetcher.js
import { useEffect, useState } from 'react';
import { db } from '@f/firebaseConfig'; // Pastikan jalur impor benar
import { ref, get } from 'firebase/database'; // Impor fungsi yang diperlukan

const useDataFetcher = (nodeName) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!nodeName) {
        setErrorMessage("Node name tidak boleh kosong.");
        return; // Jika nodeName kosong, tidak perlu fetch
      }

      setIsLoading(true);
      setErrorMessage(""); // Reset error message

      try {
        const snapshot = await get(ref(db, nodeName)); // Ambil data dari node
        if (snapshot.exists()) {
          setData(snapshot.val()); // Set data jika ditemukan
        } else {
          setErrorMessage("Data tidak ditemukan untuk node yang diberikan.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setErrorMessage("Terjadi kesalahan saat mengambil data.");
      } finally {
        setIsLoading(false); // Set loading menjadi false setelah proses selesai
      }
    };

    fetchData(); // Panggil fungsi fetchData
  }, [nodeName]); // Dependensi untuk useEffect

  return { data, isLoading, errorMessage };
};

export default useDataFetcher;
