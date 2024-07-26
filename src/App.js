import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import ProductDetail from './pages/prodcutDetail/productDetail';
import Register from './pages/register/Register';
import NotFound from "././components/notFound/NotFound"
import { AppProvider } from "./AppContext";
import Cart from './components/cart/Cart';
function App() {
  return (
    // https://sweetalert2.github.io/
    <div className="App">
      <AppProvider>
       <Router>
                
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="/product" element={<Product />}></Route>
                    <Route path="/detail/:id" element={<ProductDetail />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/*" element={<NotFound />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Routes>
            </Router>
        </AppProvider>    
    </div>
  );
}

export default App;
