import Slidebar from "./components/slidebar/slidebar";
import Topbar from "./components/topBar/topbar";
import "./app.css"
import Home from "./components/pages/home/Home";
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
} from "react-router-dom";
import UserList from "./components/pages/userList/userList";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Slidebar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}


      


export default App;
