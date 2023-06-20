import { useState } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    useNavigate,
    Routes,
    NavLink,
} from "react-router-dom";
import Layout from "./components/Layout";

import React from "react";
import Login from "./pages/Login";
import ProtectedRoute from "./middleware/ProtectedRoute";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Lazy load the page components
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Anauthorized = React.lazy(() => import("./pages/Anauthorized"));

function App() {
    // const [count, setCount] = useState(0);
    const {isAuthenticated, userRole} = useAuth();
    const navigate = useNavigate();

    console.log()

    console.log("User:",userRole ,  "isAuthenticated:",isAuthenticated)

    return (
      <AuthProvider>

        <Routes>

        {isAuthenticated ? (
              <Route path="/" element={<Layout isAuthenticated={isAuthenticated} />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/unauthorized" element={<Anauthorized />} />

               <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedRoles={['admin']} >
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
            </Route>
        ) :(
            <Route path="/" element={<Login />} />
          ) }

        </Routes>

    </AuthProvider>
    );
}

export default App;
