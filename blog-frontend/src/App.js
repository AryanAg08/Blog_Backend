import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import {Dashboard, BlogCreate, BlogDisplay, DisplayParticularBlog, Landing } from "./pages/index";
import Login from "./pages/login";

function App() {
  return (

    <div>
     <Routes>
      <Route exact path="/" element={<Landing/>} />
      <Route exact path="/dashboard/g/:id" element={<Dashboard/>} />
      {/* <Route exact path="/dashboard/d/:id" element={<DiscDashboard/>} /> */}
      <Route exact path="/:id/blog-view" element={<BlogDisplay/>} />
      <Route exact path="/:id/blog-create" element={< BlogCreate/>} />
      {/* <Route exact path="/login" element={<Login />} /> */}
      <Route exact path="/posts/:id" element={< DisplayParticularBlog/>} />
     </Routes>
    
     </div>
  );
}

export default App;