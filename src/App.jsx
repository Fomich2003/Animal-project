import Layout from "./layout/layout.jsx";
import Error from "./components/Error/Error.jsx"
import Loader from "./components/Loader/Loader.jsx";
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage.jsx"
import StorePage from "./pages/StorePage/StorePage.jsx"
import InventoryPage from "./pages/InventoryPage/InventoryPage.jsx"
import { useUserContext } from "./context/UserContext.jsx";
import { useAnimalContext } from "./context/AnimalsContext.jsx";
import { ToastContainer } from "react-toastify";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";

function App() {
  const { user, isLoadingUser } = useUserContext()
  const { platformAnimals, isError, isLoadingAnimals } = useAnimalContext()

  if (isLoadingUser || isLoadingAnimals) return <Loader />
  if (isError) return <Error message={"Ой! Щось пішло не так..."} />

  return (
    <>
      <Routes>
        <Route element={<Layout user={user} />}>
          <Route path="/" element={<HomePage platformAnimals={platformAnimals} />} />
          <Route path="/store" element={<StorePage platformAnimals={platformAnimals} />} />
          <Route path="/inventory" element={<InventoryPage />} />
        </Route>
        <Route path="/register" element={<RegisterPage user={user}/>} />
      </Routes>
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
    </>
  )
}

export default App
