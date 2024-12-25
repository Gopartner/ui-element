import { addUser, updateUserRole, deleteUser } from '../services/userService';

const UserManagement = ({ userId }) => {
  const handleUpdateRole = () => updateUserRole(userId, 'admin');

  const handleDeleteUser = () => deleteUser(userId);

  return (
    <div className="p-4">
      <button onClick={handleUpdateRole} className="btn-primary">Set Admin Role</button>
      <button onClick={handleDeleteUser} className="btn-danger">Delete User</button>
    </div>
  );
};

