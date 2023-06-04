import React, { FC } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const LayOut: FC = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default LayOut;
