import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/index";
import { Landing } from "./pages/Landing";
import { BlogDisplay } from "./pages/Display-Blogs";
import { BlogCreate } from "./pages/Create-Blogs";
import { DiscDashboard } from "./pages/discord-landing";
import Login from "./pages/login";

function App() {
  return (

    <div>
     <Routes>
      <Route exact path="/" element={<Landing/>} />
      <Route exact path="/dashboard/g/:id" element={<Dashboard/>} />
      <Route exact path="/dashboard/d/:id" element={<DiscDashboard/>} />
      <Route exact path="/:id/blog-view" element={<BlogDisplay/>} />
      <Route exact path="/:id/blog-create" element={< BlogCreate/>} />
      <Route exact path="/login" element={<Login />} />
     </Routes>
    
     </div>
  );
}

export default App;