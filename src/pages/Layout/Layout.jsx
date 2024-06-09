import { AppBar } from "components/AppBar/AppBar"
import { Suspense } from "react"
import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            <AppBar/>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>


            <Toaster/>
        </>

    )
}