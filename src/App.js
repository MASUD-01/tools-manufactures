
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddaReview from './Pages/Dashboard/AddaReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import Myorder from './Pages/Dashboard/Myorder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Blogs from './Pages/Extra/Blogs';
import Myportfolio from './Pages/Extra/Myportfolio';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Notfound from './Pages/Notfound/Notfound';
import Purchase from './Pages/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>



        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>

          <Route index element={<Myorder></Myorder>}></Route>
          <Route path='addareview' element={<AddaReview></AddaReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>




        </Route >


        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/Myportfolio' element={<Myportfolio></Myportfolio>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes >
      <ToastContainer />
    </div >
  );
}

export default App;
