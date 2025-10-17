import { createContext, useState, useEffect, useContext } from "react";
import animalsService from "../service/animals-service";

const AnimalsContext = createContext();

const AnimalsProvider = ({ children }) => {
    const [platformAnimals, setPlatformAnimals] = useState([]);
    const [isLoadingAnimals, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        fetchAnimals()
    }, [])

    async function fetchAnimals() {
        try {
            const result = await animalsService.getAnimalsForShop();
            if (!result.status) throw new Error(result.message);
            setPlatformAnimals(result.data);
        } catch (error) {
            console.error(error.message);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <AnimalsContext.Provider value={{ platformAnimals, isError, isLoadingAnimals }}>
            {children}
        </AnimalsContext.Provider>
    );
};

AnimalsProvider.Context=AnimalsContext
export const useAnimalContext = () => useContext(AnimalsContext);
export default AnimalsProvider