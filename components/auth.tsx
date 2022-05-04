import React, { useState, useEffect, useContext, createContext } from "react";
import nookies from "nookies";
import { app } from "@lib/firebase";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext({
  user: null,
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ deviceToken, children }: any) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (deviceToken) {
      nookies.destroy(null, "deviceToken");
      nookies.set(null, "deviceToken", deviceToken, { path: "/" });
    }
  }, [deviceToken]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).nookies = nookies;
    }
    return getAuth(app).onIdTokenChanged(async (authUser) => {
      console.log(`token changed!`);
      if (!authUser) {
        console.log(`no token found...`);
        setUser(null);
        nookies.destroy(null, "token");
        nookies.set(null, "token", "", { path: "/" });
        return;
      }

      console.log(`updating token...`);
      const token = await authUser.getIdToken();
      setUser(authUser);
      nookies.destroy(null, "token");
      nookies.set(null, "token", token, { path: "/" });
    });
  }, []);

  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      console.log(`refreshing token...`);
      const { currentUser } = getAuth(app);
      if (currentUser) await currentUser.getIdToken(true);
    }, 10 * 60 * 1000);
    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
