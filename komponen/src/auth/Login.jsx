import React, { useState } from "react";
import { auth } from "@f/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Swal from "sweetalert2";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error sebelum login

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Tampilkan SweetAlert sukses
      Swal.fire({
        title: "Login Successful!",
        text: "You are successfully logged in.",
        icon: "success",
        showConfirmButton: false,
        timer: 2000, // Timer 2 detik
      });

      // Redirect ke halaman profil setelah delay
      setTimeout(() => {
        navigate("/profile");
      }, 2000);

      onLoginSuccess(); // Callback untuk mengarahkan pengguna setelah login
    } catch (error) {
      console.error("Login error:", error.message);

      // Menangani error dengan pesan yang lebih ramah
      let errorMessage = "";
      if (error.code === "auth/invalid-credential") {
        errorMessage =
          "The credentials provided are invalid. Please check your email and password.";
      } else if (error.code === "auth/user-not-found") {
        errorMessage =
          "No account found with this email. Please sign up first.";
      } else {
        errorMessage = "An unexpected error occurred. Please try again later.";
      }
      setError(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Login
        </h2>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded-md">
            <p className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 6L6 18M6 6l12 12"
                />
              </svg>
              <span>{error}</span>
            </p>
          </div>
        )}

        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        >
          Login
        </button>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/register")} // Mengarahkan ke halaman register
              className="text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              Register here
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
