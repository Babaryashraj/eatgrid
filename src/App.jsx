<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
import styles from './App.module.css'; 
import Button from './componant/Button'; 
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder'
import Footer from './componant/Footer';



function App() {
  
  return (
    <>
    
    <div className="app">
      <Button />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
   </>  
  );
}

export default App;
=======
import './App.css'
import TodoList from './TodoList'

function App() {


  return (
    <>
      <TodoList></TodoList>
    </>
  )
}

export default App
>>>>>>> d0c59be80de637280969f84523e38fd2e23ebd99
