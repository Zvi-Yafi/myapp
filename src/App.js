import {
  BrowserRouter,
  Route,
  Routes,
 
} from "react-router-dom";
import Home from "./home";
import Login from "./Login";
import Deshbord from "./deshbord";
import Info from "./Info";
import Logout from './Logout'
import Todos from './Todos'
import Posts from "./Posts";
import Albums from './Albums'
function App() {

  return (
    <div className="App">
      <nav
        style={{
          backgroundColor: "skyblue",
          width: "100%",
          height: "100px",
          textAlign: "center",
          fontSize: "50px",
        }}
      >
        hello world
       
      </nav>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />}>
            <Route path="login" element={<Login />} />
            <Route path="/deshbord" element={<Deshbord />}>
            <Route path="/deshbord/info" element={<Info />} />
            <Route path="/deshbord/Todos" element={<Todos />} />
            <Route path="/deshbord/Posts" element={<Posts />} />
            <Route path="/deshbord/Alboms" element={<Albums />} />
            </Route>
            <Route path="deshbord/Logout" element={<Logout />} />

             <Route path="*" element={<h1>Error</h1>} />
          </Route>
         
        </Routes>
      </BrowserRouter>
      <footer
        style={{
          backgroundColor: "skyblue",
          width: "100%",
          height: "100px",
          textAlign: "center",
          fontSize: "50px",
        }}
      >
        goodby world
      </footer>
    </div>
  );
}

export default App;
