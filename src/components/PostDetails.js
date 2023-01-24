import React from "react";
import { useParams } from "react-router-dom";
export const PostDetails = () => {
  const { userId } = useParams();
  return <div> {userId}</div>;
};
