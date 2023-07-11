import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/index";
import { Landing } from "./pages/Landing";
import { BlogDisplay } from "./pages/Display-Blogs";

function App() {
  return (

    <div>
     <Routes>
      <Route exact path="/" element={<Landing/>} />
      <Route exact path="/dashboard/:id" element={<Dashboard/>} />
      <Route exact path="/:id/blog-create" element={<BlogDisplay/>} />
     </Routes>
    
     </div>
  );
}

export default App;