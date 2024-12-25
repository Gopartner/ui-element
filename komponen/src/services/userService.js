import { getDatabase, ref, set, get, update, remove } from 'firebase/database';

const db = getDatabase();

// Tambah atau update pengguna
export const addUser = async (userId, userData) => {
  try {
    await set(ref(db, 'users/' + userId), userData);
  } catch (error) {
    throw error.message;
  }
};

// Set role pengguna( ingat: users.profile.role)
export const updateUserRole = async (userId, role) => {
  try {
    await update(ref(db, 'users/' + userId), { role });
  } catch (error) {
    throw error.message;
  }
};

// Hapus pengguna
export const deleteUser = async (userId) => {
  try {
    await remove(ref(db, 'users/' + userId));
  } catch (error) {
    throw error.message;
  }
};

