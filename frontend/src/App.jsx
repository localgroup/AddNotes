import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import FadeMenu from "./components/FadeMenu";
import ListNotes from "./pages/ListNotes"


function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}


function App() {
  return (
    <>  

        <BrowserRouter>
        <div className="fade-menu">
          <FadeMenu />
        </div>
        <Routes>
          <Route 
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<ListNotes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
