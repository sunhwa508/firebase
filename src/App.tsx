
import "./pages/Home/Home.styled";
import Header from "@/components/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
        <Header/>
        <Outlet />
    </>
  );
}


export default App;
