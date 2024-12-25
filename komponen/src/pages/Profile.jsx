import React, { useState, useEffect } from 'react';
import { useAuth } from '@cont/AuthContext';
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { currentUser, updateProfileData, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(currentUser?.displayName || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [photoURL, setPhotoURL] = useState(currentUser?.photoURL || '');
  
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    try {
      // Fungsi untuk mengupdate profile
      await updateProfileData(name, photoURL);
      setIsEditing(false); // Selesai mengedit
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleLogout = () => {
    logout();
  };

  

useEffect(() => {
    if (!currentUser) {
      navigate('/login'); // Jika tidak ada pengguna yang login, redirect ke halaman login
    }
  }, [currentUser, navigate]); // Menggunakan currentUser dan navigate sebagai dependency

  if (!currentUser) {
    return null; // Agar tidak merender komponen lainnya jika pengguna belum login
  }

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
        Profil Pengguna
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          src={photoURL || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-6 md:mb-0 md:mr-8 border-4 border-blue-500"
        />
        <div className="text-center md:text-left">
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-600 dark:text-gray-300">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                />
              </div>
              <div>
                <label htmlFor="photoURL" className="block text-sm text-gray-600 dark:text-gray-300">
                  Foto Profil (URL)
                </label>
                <input
                  type="text"
                  id="photoURL"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={handleSave}
                className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300"
              >
                Simpan Perubahan
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                {name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <strong>Email:</strong> {currentUser.email}
              </p>
              <button
                onClick={handleEditToggle}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300"
              >
                Edit Profil
              </button>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

