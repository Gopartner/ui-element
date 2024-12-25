import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
  <h1 className="text-4xl font-bold text-gray-800">404 Not Found</h1>
      <p className="text-gray-500">Maaf, halaman yang Anda cari ({location.pathname}) tidak ditemukan.</p>
  <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
   <Link to="/"> Kembali ke Beranda</Link>
  </button>
</div>
      
    </div>
  );
}
