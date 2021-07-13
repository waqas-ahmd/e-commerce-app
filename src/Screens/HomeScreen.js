import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const HomeScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/sign-in`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Home Screen</div>;
};

export default HomeScreen;
