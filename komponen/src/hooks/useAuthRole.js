// src/hooks/useAuthRole.js
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useAuthRole = () => {
  const [role, setRole] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const idTokenResult = await currentUser.getIdTokenResult();
        setRole(idTokenResult.claims.role || "user"); // Default role "user"
        setUser(currentUser);
      } else {
        setRole(null);
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Bersihkan listener saat komponen dilepas
  }, [auth]);

  return { user, role, loading };
};

export default useAuthRole;

