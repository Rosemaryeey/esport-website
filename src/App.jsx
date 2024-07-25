import React from "react";
import Header from "./components/header";
import "./App.css";
import Main from "./main2";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Team from "./pages/team";
import Pages from "./pages/pages";
import Partner from "./pages/partner";
import Shop from "./pages/shop";
import { useState } from "react";
import { Context } from "./components/Context";

function App() {
  const [menu, setMenu] = useState(true);
  return (
    <div className=" one text-white ">
      <Context.Provider value={{ menu, setMenu }}>
        <Header />
      </Context.Provider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
