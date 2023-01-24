import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Posts = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2 onClick={() => navigate("1")}>weather post 1</h2>
      <h2 onClick={() => navigate("2")}>weather post 2</h2>
      <h2 onClick={() => navigate("3")}>weather post 3</h2>
      <h2 onClick={() => navigate("4")}>weather post 4</h2>
      <Outlet />
    </>
  );
};
