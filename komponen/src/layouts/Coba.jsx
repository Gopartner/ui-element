// Komponen berikut tidak ditemukan: // import Card from 'path/to/Card';
import Login from './components/auth/Login.jsx';
import Navbar from './components/layouts/Navbar.jsx';
import '../../styles/SidebarMenu.css';

import SidebarMenu;




function Coba() {
  const handleClick = () => {
    console.log('Tombol dikvhhlik!');
  };

  return (
    <div>
      <Card onClick={handleClick}>Klik Saya />
      <Navbar />
      <Login />
    </div>
  );
}

export default Coba;