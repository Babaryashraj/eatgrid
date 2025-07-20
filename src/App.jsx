import 'bootstrap/dist/css/bootstrap.css';
import styles from './App.module.css'; 
import Button from './componant/Button'; 
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder'

function App() {
  return (
    <div className="app">
      <Button />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
}

export default App;
