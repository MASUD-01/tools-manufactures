
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
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Notfound from './Pages/Notfound/Notfound';
import Purchase from './Pages/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './Pages/Dashboard/Users';
import Addaproduct from './Pages/Dashboard/Addaproduct';
import ManageAllOrder from './Pages/Dashboard/ManageAllOrder';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import Payment from './Pages/Dashboard/Payment';

function App() {

  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>



        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorder' element={<Myorder></Myorder>}></Route>
          <Route path='addareview' element={<AddaReview></AddaReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='addaproduct' element={<Addaproduct></Addaproduct>}></Route>
          <Route path='manageallorder' element={<ManageAllOrder></ManageAllOrder>}></Route>
          <Route path='manageproduct' element={<ManageProduct></ManageProduct>}></Route>




        </Route >


        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/Myportfolio' element={<Myportfolio></Myportfolio>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes >
      <ToastContainer />
    </div >
  );
}

export default App;
