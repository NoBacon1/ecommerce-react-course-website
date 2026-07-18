import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(
        localStorage.getItem("currentUserEmail")
            ? { email: localStorage.getItem("currentUerEmail") }
            : null
    ); {/*Initially the user wont be logged in*/ }

    function signUp(email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]"); {/*Look for any arrays in the local storage*/ }

        {/*If email being entered at sign up already exists */ }
        if (users.find(u => u.email === email)) {
            return { success: false, error: "Email already exists" };
        }
        const newUser = { email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUserEmail", email)

        {/*After the user signs up, log them in */ }
        setUser({ email });

        return { success: true };
    }

    function login(email, password) {
        {/* Need to first get the list of users in the local storge*/}
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find((u) => u.email === email && u.password === password);

        if (!user) {
            return {success:false, error: "Invalid email or password"};
        }

        {/*Once find the user, want to set the local storage */}
        localStorage.setItem('currentUserEmail', email);
        setUser(null);

        return {success: true};
    }

    function logout() {
        localStorage.removeItem("currentUserEmail");
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signUp, user, logout, login }}>
            {children}
        </AuthContext.Provider>
    );
}


