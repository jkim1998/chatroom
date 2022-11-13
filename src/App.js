import './App.css';
import Register from "./pages/Register";
import Login from './pages/Login';
import Home from './pages/Home';
// import './style.scss';
import './firebase.js';


function App() {
  return (
    <div>
      {/* <Home /> */}
      <Register />
      {/* <Login /> */}
      {/* <BrowseRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowseRouter> */}
    </div>
  );
}

export default App;
