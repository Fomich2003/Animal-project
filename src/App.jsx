import Menu from "./components/Menu/Menu"
import Header from "./components/Header/Header"
import Error from "./components/Error/Error.jsx"
import Loader from "./components/Loader/Loader.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage.jsx"
import StorePage from "./pages/StorePage/StorePage.jsx"
import InventoryPage from "./pages/InventoryPage/InventoryPage.jsx"
import { useUserContext } from "./context/UserContext.jsx";
import { useAnimalContext } from "./context/AnimalsContext.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  const { user, isLoadingUser } = useUserContext()
  const { platformAnimals, isError, isLoadingAnimals } = useAnimalContext()

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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  )
}

export default App
