import React from 'react'
import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';
import Products from './../../components/products/Products';

export default function Home() {
  return (
    <div>
      <Header/>
      <Products/>
      <div>hiển thị sản phẩm</div>
      <div>thành phầm khác</div>
      <Footer/>
    </div>
  )
}
