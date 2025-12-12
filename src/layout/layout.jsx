import Header from "../components/Header/Header"
import Menu from "../components/Menu/Menu"
import { Outlet } from "react-router-dom"

function Layout({ user }) {
    return (
        <>
            <Header user={user} />
            <Outlet />
            <Menu />
        </>
    )
}

export default Layout