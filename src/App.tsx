
import "./pages/App.css";
import Header from "@/components/Header";
import React from "react";
import { Outlet} from "react-router-dom";
function App() {
  return (
    <>
        <Header/>
        <Outlet />
    </>
  );
}


export default App;
