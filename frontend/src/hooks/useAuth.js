import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await getCurrentUser();

        console.log("CURRENT USER:", res);

        setUser(res);
      } catch (err) {
        console.error(err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  return { user, loading };
}