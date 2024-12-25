// src/components/DataDisplay.jsx
import React, { useState } from 'react';
import useDataFetcher from '@h/useDataFetcher'; // Mengimpor custom hook

const DataDisplay = () => {
  const [inputValue, setInputValue] = useState(""); // State untuk menyimpan input pengguna
  const { data, isLoading, errorMessage } = useDataFetcher(inputValue); // Menggunakan custom hook

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update state inputValue
  };

  const handleFetchData = () => {
    // Fungsi ini tidak perlu melakukan apa-apa karena useDataFetcher sudah otomatis mengambil data saat inputValue berubah
  };

  return (
    <div className="data-display-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Masukkan nama node..."
        className="input-field"
      />
      <button onClick={handleFetchData} className="fetch-button">Cari Data</button>

      {isLoading && <p>Loading data...</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {data && (
        <div className="data-results">
          <h2>Data Ditemukan:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}

      {/* Umpan balik jika tidak ada input */}
      {!inputValue && !isLoading && !data && !errorMessage && (
        <p>Silakan masukkan nama node untuk mencari data.</p>
      )}
    </div>
  );
};

export default DataDisplay;
