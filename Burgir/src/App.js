import React from 'react';
import Home from './Pages/Main';
import About_page from './Pages/About_page';
import Menu_Page from './Pages/Menu_Page';
import Shop_Page from './Pages/Shop_Page';
import Blog_Review from './Pages/Blog_Review';
import Contact_Us from './Pages/Contact_Us';
import { Route,  Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About_page />} />
        <Route path="/menu" element={<Menu_Page />} />
        <Route path="/shop" element={<Shop_Page />} />
        <Route path="/blog" element={<Blog_Review />} />
        <Route path="/contact" element={<Contact_Us />} />
      </Routes>
    </>
  );
}

export default App;