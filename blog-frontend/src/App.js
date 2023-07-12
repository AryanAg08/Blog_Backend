import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/index";
import { Landing } from "./pages/Landing";
import { BlogDisplay } from "./pages/Display-Blogs";
import { BlogCreate } from "./pages/Create-Blogs";

function App() {
  return (

    <div>
     <Routes>
      <Route exact path="/" element={<Landing/>} />
      <Route exact path="/dashboard/:id" element={<Dashboard/>} />
      <Route exact path="/:id/blog-create" element={<BlogDisplay/>} />
      <Route exact path="/create" element={< BlogCreate/>} />
     </Routes>
    
     </div>
  );
}

export default App;