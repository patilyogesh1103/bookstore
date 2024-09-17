import React, { createContext, useContext, useState } from "react";

//authUser is passed in App.jsx as we have to navigate courses page to signup if
//user does not have any acocunt or not logged in`

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    let initialAuthUser = null;  //this is main as initially our localStorage have not any value
    try {
        const storedUser = localStorage.getItem("Users");
        initialAuthUser = storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
    }

    const [authUser, setAuthUser] = useState(initialAuthUser);

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);








// In React, a provider refers to a component that makes some data (typically state or context)
// available to all components within its tree, without the need to pass props down manually
// at every level. The most common use of a provider in React is with the Context API.
