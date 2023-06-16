import {BrowserRouter as Router, Navigate, Route,Routes} from "react-router-dom";
import MainPage from './pages/mainpage.js'
import './css/index.css';
import Error404 from "./pages/404.js";
import Register from "./pages/register.js";
import Login from "./pages/login.js";
import Activate from "./pages/activate.js";
import Header from "./components/header/header.js";
import Profile from "./pages/profile.js";
import PostEditor from "./pages/postcreator.js";
import PostViewer from "./pages/postviewer.js";
import ApplyPage from "./pages/apply.js";
function App() {
    return (
      <div id = "app" className="App">
       
        <Router basename='/'>
        <Header></Header>
          <Routes>
            <Route path = '/' element = {<MainPage></MainPage>}></Route>
            <Route path = '/rejestruj' element = {<Register></Register>}></Route>
            <Route path = '/zaloguj' element = {<Login></Login>}></Route>
            <Route path = '/profil' element = {<Profile/>}></Route>
            <Route path = '/new' element = {<PostEditor/>}></Route>
            <Route path = '/edit/:id' element = {<PostEditor/>}></Route>
            <Route path = '/post/:id' element = {<PostViewer/>}></Route>
            <Route path = '/post/:id/apply' element = {<ApplyPage/>}></Route>
            <Route path = '/activate/:code' element = {<Activate></Activate>}></Route>
            <Route path="*" element={<Error404></Error404>}/>
          </Routes>
        </Router>
      </div>
    );
  }

export default App;
