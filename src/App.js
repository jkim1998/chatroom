import './App.css';
import Register from "./pages/Register";
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  // const {currentUser} = useContext(AuthContext)

  // console.log(currentUser)
  // const ProtectedRoute = ({children}) => {
  //   if(!currentUser){
  //     return <Navigate to="/login" />
  //   }
  // }
  return (
    <div>
      {/* <Home /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
