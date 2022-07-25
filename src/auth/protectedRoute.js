import { useContext, useEffect, useState } from "react"
import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "./authContext"
import Loader from "../assets/img/icons/Book.gif"
import { whoami } from "../requests/requests"

const ProtectedRoute = ({ redirectPath = "/login" }) => {
    const [loading, setLoading] = useState(true)
    const { user, setUser } = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token")
            if (!token) {
                setUser(null)
                setLoading(false)
                return
            }
            const res = await whoami(token)
            if (!res.ok) {
                setUser(null)
                setLoading(false)
                return
            }
            const user = await res.json()
            setUser(user)
            setLoading(false)
        }
        fetchData()
    }, [])

    if (user) {
        return <Outlet />
    } else if (loading) {
        return (
            <div
                style={{
                    minHeight: "90vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img src={Loader} />
            </div>
        )
    } else {
        return <Navigate to={redirectPath} replace />
    }
}

export default ProtectedRoute
