import { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import UserPage from "./pages/UserPage";
import AboutMe from "./pages/AboutMe";
import LayOut from "./components/LayOut";

const App: FC = () => {
  return (
    <Routes>
      <Route element={<LayOut />}>
        <Route path="/" element={<PostsPage />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Route>
    </Routes>
  );
};

export default App;
