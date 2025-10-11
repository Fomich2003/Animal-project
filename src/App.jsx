import Menu from "./components/Menu/Menu"
import Header from "./components/Header/Header"
import AnimalsProvider from './context/AnimalsContext.jsx'
import UserProvider from './context/UserContext.jsx'
import Error from "./components/Error/Error.jsx"
import Loader from "./components/Loader/Loader.jsx";
import { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage.jsx"
import StorePage from "./pages/StorePage/StorePage.jsx"
import InventoryPage from "./pages/InventoryPage/InventoryPage.jsx"


function App() {
  const { user, isLoadingUser } = useContext(UserProvider.Context)
  const { platformAnimals, isError, isLoadingAnimals } = useContext(AnimalsProvider.Context)

  if (isLoadingUser || isLoadingAnimals) return <Loader />
  if (isError) return <Error message={"Ой! Щось пішло не так..."} />

  return (
    <BrowserRouter>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage platformAnimals={platformAnimals} />} />
        <Route path="/inventory" element={<InventoryPage />} />
      </Routes>
      <Menu />
    </BrowserRouter>
  )
}

export default App
