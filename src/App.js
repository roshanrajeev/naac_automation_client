import { Route, Routes } from "react-router-dom"

import Editor from "./pages/editor/Editor"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import KeyIndicator from "./pages/keyIndicator/KeyIndicator"
import Preview from "./pages/preview/Preview"
import Criteria from "./pages/criteria/Criteria"
import ProtectedRoute from "./auth/protectedRoute"

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/editor" element={<Editor/>}/> */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/criteria" element={<Criteria />} />
                    <Route path="/indicator/:id" element={<KeyIndicator />} />
                    <Route path="/preview/:id" element={<Preview />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
