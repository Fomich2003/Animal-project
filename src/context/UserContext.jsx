import { createContext, useState, useEffect, useContext } from "react";
import { saveCoockie, checkCookie } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoadingUser, setIsLoading] = useState(true);
    const [userAnimals, setUserAnimals] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const exUser = localStorage.getItem("user")
        if (exUser) {
            setUser(JSON.parse(exUser))
            setUserAnimals(JSON.parse(exUser).myAnimals)
        } else {
            navigate("/register")
            // const newUser = {
            //     id: Date.now(),
            //     nick: "Dima",
            //     balance: 0,
            //     myAnimals: []
            // }
            // setUser(newUser)
            // setUserAnimals(newUser.myAnimals)
            // localStorage.setItem("user", JSON.stringify(newUser))
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
        localStorage.setItem("user", JSON.stringify({ ...user, balance: user.balance + 15 }))
        setUser(prev => {
            console.log(prev)
            return {
                ...prev, balance: prev.balance + 15
            }
        })
    }

    function buyAnimal(animal) {
        if (animal.price > user.balance) {
            return {
                status: false,
                message: "У вас недостатньо грошей"
            }
        }

        const updatedAnimals = [...userAnimals, { ...animal, price: Math.round(animal.price * 0.9) }]

        localStorage.setItem("user", JSON.stringify({ ...user, myAnimals: updatedAnimals, balance: user.balance - animal.price }))

        setUser(prev => ({ ...prev, balance: prev.balance - animal.price }))

        setUserAnimals(updatedAnimals)
        return {
            status: true,
            message: "Успішна покупка!"
        }
    }

    function sellAnimal(animal) {
        const exAnimal = userAnimals.find(el => el.name === animal.name)

        if (!exAnimal) {
            return {
                status: false,
                message: "Ви не можете здійснити продажу"
            }
        }

        const updatedAnimals = userAnimals.filter(el => el.name !== animal.name)

        localStorage.setItem("user", JSON.stringify({ ...user, myAnimals: updatedAnimals, balance: user.balance + animal.price }))

        setUser(prev => ({ ...prev, balance: prev.balance + animal.price }))


        setUserAnimals(updatedAnimals)
        return {
            status: true,
            message: "Продажа успішна!"
        }
    }

    return (
        <UserContext.Provider value={{ user, isLoadingUser, userAnimals, buyAnimal, sellAnimal }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.Context = UserContext
export const useUserContext = () => useContext(UserProvider.Context)
export default UserProvider