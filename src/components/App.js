
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
          <Routes>
            <Route path="/" element={<ItemList />}/>
            <Route path="/itemdetail/:id" element={<ItemDetail />}/>
          </Routes>
    </div>
  )
}

export default App
