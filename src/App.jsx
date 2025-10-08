import Menu from "./components/Menu/Menu"
import Header from "./components/Header/Header"
import AnimalsProvider from './context/AnimalsContext.jsx'
import UserProvider from './context/UserContext.jsx'
import Error from "./components/Error/Error.jsx"
import Loader from "./components/Loader/Loader.jsx";
import { useContext } from "react"


function App() {
  const { user, isLoadingUser } = useContext(UserProvider.Context)
  const { platformAnimals, isError, isLoadingAnimals } = useContext(AnimalsProvider.Context)

  if(isLoadingUser || isLoadingAnimals ) return <Loader />
  if(isError) return <Error message={"Ой! Щось пішло не так..."} />

  return (
    <>
      <Header user={user} />
      <Menu />
    </>
  )
}

export default App
