import { createContext, useState, useEffect } from "react";
import { saveCoockie, checkCookie } from "../utils/helpers";
const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoadingUser, setIsLoading] = useState(true);


    useEffect(() => {
        const exUser = localStorage.getItem("user")
        if (exUser) {
            setUser(JSON.parse(exUser))
        } else {
            const newUser = {
                id: Date.now(),
                nick: "Dima",
                balance: 0,
                myAnimals: []
            }
            setUser(newUser)
            localStorage.setItem("user", JSON.stringify(newUser))
        }
        setIsLoading(false)
    }, [])

    useEffect(() => {
        if (!user) return
        updateBalance()
    }, [user])

    function updateBalance() {
        if (checkCookie("balance")) return 
        saveCoockie("balance", "true", "86400")
        localStorage.setItem("user", JSON.stringify({...user, balance: user.balance + 15} ))
        setUser(prev => {
            console.log(prev)
            return {
                ...prev, balance: prev.balance + 15
            }
        })
    }

    return (
        <UserContext.Provider value={{ user, isLoadingUser }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.Context=UserContext
export default UserProvider