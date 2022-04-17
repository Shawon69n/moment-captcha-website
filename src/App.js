
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import RequiredAuth from './Components/RequiredAuth/RequiredAuth';
import Checkout from './Components/Services/Checkout/Checkout';
import Services from './Components/Services/Services';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
     <Header></Header>

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/services' element={<Services></Services>}></Route>
      <Route path='/checkout'
       element={ <RequiredAuth> <Checkout></Checkout> </RequiredAuth>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
    </Routes>

    <Footer></Footer>
    </div>
  );
}

export default App;
