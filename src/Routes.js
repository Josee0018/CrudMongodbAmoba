import { Route, Routes, Navigate } from "react-router-dom";
import PublicPage from "./app/layouts/Public";
import Login from "./app/views/Login/Login.controller";
import PrivatePage from "./app/layouts/PrivateLayout";
import Persons from "./app/views/Person/Persons.controller";
import Home from "./app/views/Home/Home.controller";

function RoutesContainer(props) {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicPage>
            <Login {...props} />
          </PublicPage>
        }
      />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route
        path="persons"
        element={
          <PrivatePage>
            <Persons {...props} />
          </PrivatePage>
        }
      />
      <Route
        path="/home"
        element={
          <PrivatePage>
            <Home {...props} />
          </PrivatePage>
        }
      />
    </Routes>
  );
}

export default RoutesContainer;
