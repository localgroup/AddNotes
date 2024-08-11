import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import FadeMenu from "./components/FadeMenu";
import ListNotes from "./pages/ListNotes"
import { ACCESS_TOKEN } from './constants'


function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function LoginRoute() {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (token) {
    return <Navigate to="/" />;
  }
  return <Login />;
}

function HomeRoute() {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (token) {
    return <Navigate to="/" />;
  }
  return <RegisterAndLogout />;
}


function App() {
  return (
    <>  

        <BrowserRouter>
        <header className="fade-menu">
          <FadeMenu />
        </header>
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
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<HomeRoute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
