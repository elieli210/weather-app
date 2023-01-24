import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import React from "react";
import { Posts } from "./components/Posts";
import { Blog } from "./components/Blog";
import { PostDetails } from "./components/PostDetails";
import { Navbar } from "./components/Navbar";
import { Info } from "./components/Info";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path={"/:cityId"} element={<Info />} />
        <Route path="posts" element={<Posts />} />
        <Route path="blog" element={<Blog />} />
        <Route path={"posts/:cityId"} element={<PostDetails />} />
      </Routes>
    </>
  );
}

export default App;
