import { Link, Route, Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Post from './Post/Post';
import Posts from './Post/Posts';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/post"} className="nav-link">
                Post
              </Link>
            </li>
          </div>
        </div>
      </nav>
      <div className="container-home mt-3">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>

      {/* <AuthVerify logOut={this.logOut}/> */}
    </div>
  );
}

export default App;
